# Stage 14 - запуск на домене и сохранение изменений

## Что изменилось
Теперь `/admin/site-settings` и `/admin/brand` сохраняют данные через серверные API:

- `/api/site-content`
- `/api/brand`

Публичный сайт читает эти данные через API. Это нужно, чтобы изменения на домене были видны всем посетителям, а не только в одном браузере.

## Что нужно сделать в Supabase
Открой Supabase SQL Editor и выполни файл:

`sql/stage14_site_settings_server_cms.sql`

Он создаёт таблицы:

- `site_settings`
- `trainer_brand`

## Что нужно добавить в Vercel Environment Variables

```text
NEXT_PUBLIC_SUPABASE_URL=...
NEXT_PUBLIC_SUPABASE_ANON_KEY=...
SUPABASE_SERVICE_ROLE_KEY=...
ADMIN_PASSWORD=...
```

Важно: `SUPABASE_SERVICE_ROLE_KEY` нельзя показывать клиентам. Он нужен только на сервере Vercel.

## Проверка

1. Открой `/admin/system`
2. Убедись, что Supabase URL, ANON KEY, Service Role Key и ADMIN_PASSWORD показывают OK.
3. Открой `/admin/site-settings`
4. Измени тариф или телефон
5. Нажми "Сохранить"
6. Открой главную страницу `/` и обнови через Ctrl+F5

## Локальный режим
Если Supabase не подключён, изменения могут сохраняться только в браузере через localStorage. Для домена нужен Supabase.
