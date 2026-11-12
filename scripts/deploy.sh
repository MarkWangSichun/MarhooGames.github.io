#!/usr/bin/env bash
# One-command deploy: build, upload, configure nginx, verify.
#
#   scripts/deploy.sh
#
# Set REMOTE / SSH_PORT to target a different host. If SSHPASS is set the
# scripts hand it to sshpass; otherwise ssh uses your key or asks for a password
# interactively. No credentials are stored in this repository.
set -euo pipefail

cd "$(dirname "$0")/.."

# Private configuration is ignored by Git. Export REMOTE to override the file.
remote_override=${REMOTE-}
if [ -f .env.deploy.local ]; then
	source .env.deploy.local
fi
if [ -n "$remote_override" ]; then
	REMOTE=$remote_override
fi
: "${REMOTE:?Set REMOTE in .env.deploy.local or the environment}"
SSH_PORT=${SSH_PORT:-22}
SITE=${SITE:-/var/www/html/marhoo_home_page}
NGINX_DIR=${NGINX_DIR:-/opt/marhoo/nginx}
SSH_OPTS=(-p "$SSH_PORT" -o StrictHostKeyChecking=accept-new)

if [ -n "${SSHPASS:-}" ]; then
	command -v sshpass >/dev/null || { echo "SSHPASS is set but sshpass is not installed" >&2; exit 1; }
	SSH=(sshpass -e ssh "${SSH_OPTS[@]}")
	RSYNC_SSH="sshpass -e ssh -p $SSH_PORT -o StrictHostKeyChecking=accept-new"
else
	SSH=(ssh "${SSH_OPTS[@]}")
	RSYNC_SSH="ssh -p $SSH_PORT -o StrictHostKeyChecking=accept-new"
fi

# -rltpz rather than -a: archive mode preserves the local uid and group, which
# is how the site ended up owned by 501:staff on a Linux host. Ownership belongs
# to the server, so leave it alone and let it default to the login user.
RSYNC_OPTS=(-rltpz --delete --exclude='.DS_Store' --exclude='._*' -e "$RSYNC_SSH")

echo "==> build"
npm run build

echo "==> upload site"
rsync "${RSYNC_OPTS[@]}" out/ "$REMOTE:$SITE/"

echo "==> upload nginx configuration"
"${SSH[@]}" "$REMOTE" "mkdir -p $NGINX_DIR"
rsync "${RSYNC_OPTS[@]}" deploy/nginx/ "$REMOTE:$NGINX_DIR/"

echo "==> configure nginx"
"${SSH[@]}" "$REMOTE" 'bash -s' < scripts/deploy_remote.sh

echo "==> verify"
bash scripts/verify_deploy.sh
