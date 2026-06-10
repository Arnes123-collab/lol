# Этап 9 - финальная подготовка к запуску

## Обязательные переменные Vercel

- `ADMIN_PASSWORD` - пароль входа тренера в `/admin`
- `NEXT_PUBLIC_SUPABASE_URL` - URL проекта Supabase
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` - anon key Supabase

Важно: демо-пароль `admin123` работает только локально. В production вход будет заблокирован, если `ADMIN_PASSWORD` не задан.

## Проверка перед публикацией

1. Выполнить SQL из `supabase_schema.sql`.
2. Выполнить SQL из `sql/stage8_training_reports.sql`.
3. Запустить локально: `npm install`, затем `npm run build`.
4. Открыть `/admin/launch-checklist`.
5. Проверить на телефоне:
   - главная страница
   - форма заявки
   - форма отчёта `/reports/new`
   - админка `/admin`
   - оплаты `/admin/payments`
   - отчёты `/admin/reports`
   - PDF-план `/plans/demo/view`
6. Перед рекламой сделать бэкап базы.

## Что ещё не является банковской безопасностью

Сейчас сайт готов для тренерского MVP, но не для хранения банковских карт, паспортов и медицинских диагнозов. Не собирайте лишние персональные данные.
