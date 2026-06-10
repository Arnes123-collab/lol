# STAGE 15 - Testimonials and Results CMS

## Что исправлено перед 15 этапом

1. Исправлен синтаксис в `src/lib/site-content/useSiteContent.ts`:
   - первая строка теперь строго `'use client';`

2. Исправлен конфликт серверного API:
   - `/api/site-content` больше не импортирует client-hook;
   - общие функции вынесены в `src/lib/site-content/siteContentCore.ts`.

3. Причина ошибки `GET /api/site-content 500`:
   - серверный route импортировал файл с client-директивой и хуками React;
   - теперь route использует server-safe core-модуль.

## Что добавлено в 15 этапе

- `/admin/testimonials` - управление отзывами и результатами учеников.
- `/api/testimonials` - серверный API для домена/Supabase.
- `src/lib/testimonials/defaultTestimonials.ts` - базовые кейсы.
- `src/lib/testimonials/useTestimonials.ts` - локальное сохранение + Supabase API.
- `src/components/sections/Results.tsx` теперь читает отзывы из CMS.
- `sql/stage15_testimonials.sql` - таблица Supabase.

## Проверка

1. Открыть `/admin/testimonials`.
2. Изменить отзыв или результат.
3. Нажать сохранить.
4. Открыть главную страницу `/`.
5. Обновить `Ctrl + F5`.

В локальной версии данные хранятся в браузере. На домене - через Supabase после выполнения SQL и добавления переменных окружения.
