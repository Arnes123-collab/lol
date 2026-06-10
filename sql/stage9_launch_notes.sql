-- Этап 9: заметки по безопасности Supabase
-- В текущем MVP сайт использует anon key и простую cookie-админку на уровне Next.js.
-- Не включайте RLS вслепую, иначе админка может потерять доступ к таблицам.
-- Для следующего уровня безопасности лучше перейти на Supabase Auth или server-only service role.

-- Минимальная проверка таблиц:
select 'clients' as table_name, count(*) from public.clients
union all
select 'training_plans', count(*) from public.training_plans
union all
select 'training_plan_items', count(*) from public.training_plan_items
union all
select 'client_payments', count(*) from public.client_payments
union all
select 'training_reports', count(*) from public.training_reports;
