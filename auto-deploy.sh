#!/usr/bin/env bash
set -e
cd /var/www/3dtabela.com
git fetch origin main --quiet
LOCAL=$(git rev-parse HEAD)
REMOTE=$(git rev-parse origin/main)
if [ "$LOCAL" != "$REMOTE" ]; then
  echo "=== $(date) yeni degisiklik: $REMOTE ==="
  git reset --hard origin/main
  npm ci --no-audit --no-fund
  npm run build
  pm2 reload 3dtabela --update-env
  echo "=== $(date) deploy tamam ==="
fi
