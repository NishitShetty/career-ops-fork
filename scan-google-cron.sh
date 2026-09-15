#!/usr/bin/env bash
# Cron wrapper for scan-google.mjs. Cron runs with a minimal PATH and no shell
# profile, so node's location is pinned explicitly here.
set -uo pipefail
export PATH="/home/nshetty/.local/bin:/usr/local/bin:/usr/bin:/bin"
cd /home/nshetty/career-ops-fork || exit 1
/home/nshetty/.local/bin/node scan-google.mjs --quiet
