# Stage 11 - Exercise Library CMS

## Что добавлено

- `/admin/exercises` - полноценная админка базы упражнений.
- 225 упражнений в стартовом каталоге.
- 9 главных категорий.
- 33 подкатегории.
- Поиск по названию, мышцам, оборудованию, категории, подкатегории и sport tags.
- Фильтры: категория, подкатегория, тип, уровень сложности, оборудование, sport tag, активные/скрытые.
- Редактирование упражнения.
- Добавление нового упражнения.
- Скрыть/показать упражнение без удаления.
- Фото, GIF, видео URL.
- Типичные ошибки.
- Комментарий тренера.
- Замены упражнений.
- Интеграция с `/admin/plan-builder`: конструктор теперь берёт активную базу упражнений из локальной CMS.
- SQL-схема `sql/stage11_exercise_library_cms.sql` для Supabase.

## Главная логика

Пока режим локальный: упражнения хранятся в `localStorage` браузера.
Для боевого режима нужно перенести эту структуру в Supabase и Storage.

## Важные файлы

- `src/app/admin/exercises/page.tsx`
- `src/components/admin/exercises/ExerciseLibraryManager.tsx`
- `src/lib/exercises/exerciseCmsData.ts`
- `src/types/exercise.ts`
- `src/lib/plan-builder/exerciseLibrary.ts`
- `src/components/admin/PlanBuilder.tsx`
- `sql/stage11_exercise_library_cms.sql`

## Проверка

Открыть:

`/admin/exercises`

Потом:

`/admin/plan-builder`

В конструкторе должны отображаться только активные упражнения из базы.
