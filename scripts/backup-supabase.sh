#!/usr/bin/env bash
set -euo pipefail

# Использование:
# 1) Установите pg_dump
# 2) Экспортируйте DATABASE_URL из Supabase Project Settings > Database > Connection string
#    export DATABASE_URL="postgresql://postgres.xxx:password@aws-0-region.pooler.supabase.com:6543/postgres"
# 3) Запустите: bash scripts/backup-supabase.sh

if [ -z "${DATABASE_URL:-}" ]; then
  echo "Ошибка: задайте DATABASE_URL перед запуском."
  exit 1
fi

mkdir -p backups
FILE="backups/agashka_supabase_$(date +%Y-%m-%d_%H-%M-%S).sql"
pg_dump "$DATABASE_URL" --clean --if-exists --no-owner --no-privileges > "$FILE"
echo "Бэкап создан: $FILE"
