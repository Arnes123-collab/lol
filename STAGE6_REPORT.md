# Этап 6 - экспорт и отправка плана

## Что сделано

Добавлен полноценный шестой этап для выдачи тренировочного плана клиенту:

- страница просмотра готового плана: `/plans/[id]/view`
- красивый PDF-план через `jspdf` и `html2canvas`
- кнопка `Скачать PDF`
- кнопка `Скопировать для WhatsApp`
- кнопка `Печатный вид`
- фото упражнений в плане
- печатная CSS-версия через `@media print`
- демо-данные тренировочного плана, если Supabase ещё не подключён
- типы плана для дальнейшей интеграции с базой данных
- ссылка из редактора плана на страницу PDF/WhatsApp

## Новые файлы

- `src/app/plans/[id]/view/page.tsx`
- `src/components/plans/PlanExportView.tsx`
- `src/components/plans/PlanPdfButton.tsx`
- `src/components/plans/PlanWhatsAppButton.tsx`
- `src/components/plans/ExerciseCard.tsx`
- `src/components/plans/PrintablePlan.tsx`
- `src/types/plan.ts`
- `src/lib/demoPlanData.ts`
- `public/exercises/bench-press.jpg`
- `public/exercises/squat.jpg`
- `public/exercises/deadlift.jpg`
- `public/exercises/face-pull.jpg`
- `public/exercises/row.jpg`
- `public/exercises/default.jpg`

## Изменённые файлы

- `package.json` - добавлены `jspdf` и `html2canvas`
- `package-lock.json` - обновлены зависимости
- `src/app/globals.css` - добавлен CSS для печати
- `src/components/PlanEditor.tsx` - добавлена ссылка на экспорт плана
- `src/app/admin/plans/page.tsx` - добавлена визуальная пометка PDF/WhatsApp

## Как пользоваться

1. Запустить проект:

```bash
npm install
npm run dev
```

2. Открыть демо-страницу:

```text
http://localhost:3000/plans/demo/view
```

3. На странице можно:

- скачать план в PDF
- скопировать короткий текст для WhatsApp
- открыть печатный вид

## Проверка

- `npx tsc --noEmit` - успешно, ошибок TypeScript нет.
- `npm run build` в песочнице не завершился по времени на этапе production build Next.js. Компиляция страниц и TypeScript-проверка проходят, но полноценную production-сборку нужно повторить локально или на Vercel после загрузки проекта.

## Что нужно сделать после загрузки на Vercel

1. Подключить Supabase env-переменные:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
2. Заменить демо-данные на реальные данные из таблиц клиента и плана.
3. Заменить placeholder-фото упражнений на реальные фотографии тренера или упражнения.

## Следующий этап 7

Этап 7 логично делать так:

- автоматическое формирование PDF из реального плана в Supabase
- выбор шаблона продукта: бесплатное занятие / 6 000 тг / 15 000 тг / 18 000 тг / 40 000 тг
- отправка клиенту через WhatsApp-ссылку
- история выданных PDF-планов в карточке клиента
