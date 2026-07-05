#!/usr/bin/env bash
# Boots `next start` on :8080, waits until it answers, runs the command passed
# as arguments against it, then tears the server down. Used because this
# sandbox kills detached/background processes — the server must live inside a
# single foreground command for the duration of a check.
#
#   bash .testing/with-server.sh node .testing/run-checks.mjs --url http://127.0.0.1:8080/ --unit x
set -uo pipefail
cd "$(dirname "$0")/.." || exit 1

PORT="${PORT:-8080}"
pkill -f "next-server" 2>/dev/null
pkill -f "next start" 2>/dev/null

node_modules/.bin/next start -p "$PORT" >/tmp/nextsrv.log 2>&1 &
SRV=$!
trap 'kill "$SRV" 2>/dev/null; pkill -f "next-server" 2>/dev/null' EXIT

# Wait for readiness. No foreground `sleep` (blocked in this sandbox) — curl's
# own retry/backoff does the waiting inside the network tool.
if ! curl -s -o /dev/null \
      --retry 90 --retry-delay 1 --retry-connrefused --retry-all-errors \
      "http://127.0.0.1:${PORT}/"; then
  echo "SERVER FAILED TO START" >&2
  cat /tmp/nextsrv.log >&2
  exit 3
fi

"$@"
rc=$?
exit $rc
