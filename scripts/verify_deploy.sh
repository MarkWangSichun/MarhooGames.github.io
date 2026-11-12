#!/usr/bin/env bash
# Post-deploy smoke test for https://marhoo.com.
#
#   scripts/verify_deploy.sh
#   BASE=http://127.0.0.1:8000 scripts/verify_deploy.sh   # any host
#
# Every check is something a broken deploy has actually broken before: the media
# page itself, the legacy redirects handed to App Store editors, video range
# requests, and the pages that share the same nginx server block.
set -uo pipefail

BASE=${BASE:-https://marhoo.com}
PRESS_PATH=/press/pomoveggie/
failures=0

pass() { printf '  ok    %s\n' "$*"; }
fail() { printf '  FAIL  %s\n' "$*"; failures=$((failures + 1)); }

status() { curl -s -o /dev/null -m 20 -w '%{http_code}' "$1"; }
location_of() { curl -s -o /dev/null -m 20 -w '%{redirect_url}' "$1"; }

url_for() { # url_for PATH_OR_URL
	case "$1" in
	http://* | https://*) printf '%s' "$1" ;;
	*) printf '%s%s' "$BASE" "$1" ;;
	esac
}

expect_status() { # expect_status PATH_OR_URL WANT
	local got
	got=$(status "$(url_for "$1")")
	if [ "$got" = "$2" ]; then pass "$1 -> $got"; else fail "$1 -> $got (want $2)"; fi
}

expect_redirect() { # expect_redirect PATH
	local got
	got=$(location_of "$BASE$1")
	case "$got" in
	*"$PRESS_PATH") pass "$1 -> 301 $PRESS_PATH" ;;
	*) fail "$1 -> redirects to '$got' (want $PRESS_PATH)" ;;
	esac
}

echo "verifying $BASE"

expect_status / 200
expect_status "$PRESS_PATH" 200

# The old address is in emails already sent to editors; it must never 404 and
# must resolve in one hop.
for p in /editorial /editorial/ /editorial/focus /editorial/focus/; do
	expect_redirect "$p"
done

expect_status "$PRESS_PATH" 200
expect_status /press/pomoveggie/promo.mp4 200
expect_status /press/pomoveggie/poster.jpg 200
expect_status /apps/focus/ 200
expect_status /chest/ 200
expect_status /privacy/ 200
expect_status /delete-account/ 200
expect_status /does-not-exist-xyz/ 404
expect_status https://www.marhoo.com/ 200

video_type=$(curl -s -o /dev/null -m 20 -w '%{content_type}' "$BASE${PRESS_PATH}promo.mp4")
case "$video_type" in
video/mp4*) pass "promo.mp4 content-type $video_type" ;;
*) fail "promo.mp4 content-type '$video_type' (want video/mp4)" ;;
esac

range_code=$(curl -s -r 0-1023 -o /dev/null -m 20 -w '%{http_code}' "$BASE${PRESS_PATH}promo.mp4")
if [ "$range_code" = 206 ]; then pass "promo.mp4 range request -> 206"; else fail "promo.mp4 range request -> $range_code (want 206)"; fi

# The page carries its own assertions: a wrong canonical or a lifted noindex
# would leak the press page into search results next to the product page.
html=$(curl -s -m 20 "$BASE$PRESS_PATH")
case "$html" in
*"noindex"*) pass "press page keeps noindex" ;;
*) fail "press page lost its noindex directive" ;;
esac
canonical=$(printf '%s' "$html" | grep -o 'rel="canonical" href="[^"]*"' | sed 's/.*href="//; s/"$//')
case "$canonical" in
"$PRESS_PATH" | "$BASE$PRESS_PATH") pass "canonical -> $canonical" ;;
*) fail "canonical is '$canonical' (want $PRESS_PATH)" ;;
esac

echo
if [ "$failures" -eq 0 ]; then
	echo "all checks passed"
	exit 0
fi
echo "$failures check(s) failed"
exit 1
