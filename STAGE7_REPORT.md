# Этап 7 - оплаты и статусы клиентов

Добавлено:

- Страница `/admin/payments`
- Таблица оплат клиентов
- Видно: кто оплатил, тариф, дата начала, дата окончания, сколько дней осталось
- Автоматический статус: активен / просрочен / пауза
- Фильтры по статусу, тарифу и поиску клиента
- Сводные карточки: клиентов, оплатили, активные, просроченные, пауза, выручка
- Кнопка "Скопировать статус"
- Кнопка "Печатный отчёт"
- Типы оплат `src/types/payment.ts`
- Утилиты расчёта статуса `src/lib/payments/paymentUtils.ts`
- Демо-данные `src/lib/demoPayments.ts`
- SQL-заготовка таблицы `client_payments` в `supabase_schema.sql`

Файлы:

- `src/app/admin/payments/page.tsx`
- `src/components/payments/PaymentsDashboard.tsx`
- `src/components/payments/PrintPaymentsButton.tsx`
- `src/types/payment.ts`
- `src/lib/payments/paymentUtils.ts`
- `src/lib/demoPayments.ts`
- `src/app/admin/page.tsx`
- `supabase_schema.sql`

Важно:

Сейчас страница использует демо-данные, чтобы интерфейс работал сразу. Следующий технический шаг - подключить таблицу `client_payments` к реальным клиентам Supabase, добавить создание/редактирование платежа и продление тарифа.

Проверка:

- `npx tsc --noEmit` - должен проходить без ошибок.
- `npm run build` - проверить на локальной машине или Vercel.
