#!/usr/bin/env bash
# Server-side step for deploying this static site.
#
#   ssh "$REMOTE" 'bash -s' < scripts/deploy_remote.sh
#
# Normally invoked through scripts/deploy.sh, which uploads the two inputs this
# script expects:
#   out/          -> /var/www/html/marhoo_home_page/   (the site)
#   deploy/nginx/ -> /opt/marhoo/nginx/                 (the configuration)
#
# The nginx configuration is kept in the repository and linked into
# /etc/nginx, so a hand edit on the server is a change to a deployment
# artifact: it shows up in `git status` as a missing change and is reverted on
# the next deploy. Nothing here writes nginx configuration from a heredoc.
#
# Idempotent: identical configuration means no reload at all.
set -euo pipefail

SITE=/var/www/html/marhoo_home_page
CONF_SRC=/opt/marhoo/nginx/marhoo.conf
SNIP_SRC=/opt/marhoo/nginx/snippets/marhoo-legacy-redirect.conf
CONF_LIVE=/etc/nginx/conf.d/marhoo.conf
SNIP_LIVE=/etc/nginx/snippets/marhoo-legacy-redirect.conf
BACKUP=/etc/nginx/.deploy-backup-$(date +%Y%m%d%H%M%S)

die() { printf 'FAILED: %s\n' "$*" >&2; exit 1; }
note() { printf '%s\n' "$*"; }

checksum() { [ -f "$1" ] && md5sum "$1" | cut -d' ' -f1 || echo missing; }

# ---------------------------------------------------------------------------
# 1. Preflight. Every check runs before the first mutation, so a missing input
#    leaves the server exactly as it was instead of half-configured.
# ---------------------------------------------------------------------------
[ -f "$CONF_SRC" ] || die "$CONF_SRC is missing; run scripts/deploy.sh instead of this script alone"
[ -f "$SNIP_SRC" ] || die "$SNIP_SRC is missing; run scripts/deploy.sh instead of this script alone"
[ -f "$SITE/index.html" ] || die "$SITE/index.html is missing; the rsync upload did not run"
command -v nginx >/dev/null || die "nginx is not installed"
mkdir -p "$(dirname "$CONF_LIVE")" "$(dirname "$SNIP_LIVE")"

# Exactly one default_server per port, site-wide. Refuse to run if some other
# file claims it: that is the condition that makes nginx refuse to start, and it
# is introduced by editing files, not by this script.
other_defaults=$(grep -l 'default_server' /etc/nginx/conf.d/*.conf 2>/dev/null \
	| grep -v -x -e "$CONF_LIVE" || true)
[ -z "$other_defaults" ] || die "another conf.d file claims default_server: $other_defaults"

# ---------------------------------------------------------------------------
# 2. Filesystem hygiene. Only repair what is actually wrong; a blanket
#    `chown -R` on every deploy rewrites the whole tree for no reason.
# ---------------------------------------------------------------------------
find "$SITE" -name '._*' -delete 2>/dev/null || true
find "$SITE" -name '.DS_Store' -delete 2>/dev/null || true
find "$SITE" \( ! -user root -o ! -group root \) -exec chown root:root {} + 2>/dev/null || true

chown -R root:root /opt/marhoo/nginx
chmod -R go-w /opt/marhoo/nginx

# ---------------------------------------------------------------------------
# 3. Install the configuration as symlinks.
#
# /opt/marhoo/last-known-good holds the last configuration that survived
# `nginx -t`. It cannot live under /opt/marhoo/nginx because the rsync that
# uploads the configuration uses --delete.
# ---------------------------------------------------------------------------
LKG=/opt/marhoo/last-known-good

# What nginx is actually running. Comparing the file on disk before and after
# linking does not work: the upload has already replaced the link target by the
# time this script runs, so both sides would read the new content and a changed
# configuration would never be reloaded. State is recorded only after a reload
# succeeds.
LOADED_STATE=/var/lib/marhoo/nginx-loaded.md5
mkdir -p "$(dirname "$LOADED_STATE")"

mkdir -p "$BACKUP"
[ -f "$CONF_LIVE" ] && cp -aL "$CONF_LIVE" "$BACKUP/marhoo.conf" || true
[ -f "$SNIP_LIVE" ] && cp -aL "$SNIP_LIVE" "$BACKUP/marhoo-legacy-redirect.conf" || true

new_hash="$(checksum "$CONF_SRC") $(checksum "$SNIP_SRC")"
loaded_hash="$(cat "$LOADED_STATE" 2>/dev/null || echo none)"

# ln -sfn replaces the link in place; cp would instead write through a symlinked
# destination and corrupt the file in /opt/marhoo/nginx.
ln -sfn "$CONF_SRC" "$CONF_LIVE"
ln -sfn "$SNIP_SRC" "$SNIP_LIVE"

restore() { # restore SOURCE_CONF SOURCE_SNIP
	rm -f "$CONF_LIVE" "$SNIP_LIVE"
	cp -a "$1" "$CONF_LIVE"
	cp -a "$2" "$SNIP_LIVE"
}

# ---------------------------------------------------------------------------
# 4. Validate, then reload. The running process holds the previous
#    configuration in memory, so a rejected configuration never takes the site
#    down -- but left on disk it would take it down on the next restart.
#    Roll back to a configuration that is known to be valid, not to whatever
#    happened to be live a second ago.
# ---------------------------------------------------------------------------
if ! nginx -t; then
	if [ -f "$LKG/marhoo.conf" ] && [ -f "$LKG/snippets/marhoo-legacy-redirect.conf" ]; then
		restore "$LKG/marhoo.conf" "$LKG/snippets/marhoo-legacy-redirect.conf"
		note "ROLLBACK: restored the last configuration that passed nginx -t"
	elif [ -f "$BACKUP/marhoo.conf" ]; then
		restore "$BACKUP/marhoo.conf" "$BACKUP/marhoo-legacy-redirect.conf"
		note "ROLLBACK: restored the configuration that was live before this deploy"
	else
		note "ROLLBACK: no previous configuration available; $CONF_LIVE holds the rejected file"
	fi
	nginx -t || note "WARNING: the restored configuration also fails nginx -t; fix deploy/nginx/ before the next reboot"
	die "nginx rejected the new configuration. Nothing was reloaded, the site keeps serving the old one. Fix deploy/nginx/ and deploy again."
fi

mkdir -p "$LKG/snippets"
cp -a "$CONF_SRC" "$LKG/marhoo.conf"
cp -a "$SNIP_SRC" "$LKG/snippets/marhoo-legacy-redirect.conf"

if [ "$new_hash" = "$loaded_hash" ]; then
	rm -rf "$BACKUP"
	note "CONFIG_UNCHANGED"
	note "nginx is already running this exact configuration; no reload needed"
else
	systemctl reload nginx
	printf '%s\n' "$new_hash" >"$LOADED_STATE"
	note "CONFIG_RELOADED"
	note "nginx reloaded with the configuration from deploy/nginx/"
fi

# Keep the last few automatic backups, drop the rest. History lives in git.
ls -1dt /etc/nginx/.deploy-backup-* 2>/dev/null | tail -n +6 | xargs -r rm -rf

note "SITE_FILE_COUNT:$(find "$SITE" -type f | wc -l)"
note "DEPLOYED"
