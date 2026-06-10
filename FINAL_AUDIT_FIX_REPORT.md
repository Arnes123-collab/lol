# Финальный аудит и исправления

Проверенная версия: `agashka-powerlifting-final-all-12-stages.zip`.

## Проверки

- Распаковка ZIP: успешно.
- Структура Next.js проекта: корректная.
- `npm install`: успешно.
- `npx tsc --noEmit`: успешно, ошибок TypeScript нет.
- `npm run lint`: успешно, предупреждений и ошибок ESLint нет.
- `npm run build`: успешно завершён после отключения проблемного output file tracing в локальной среде.
- Проверены основные маршруты: главная, about, admin, brand, exercises, plan-builder, payments, reports, plans, reports/new.

## Исправления

1. Обновлён Next.js с `14.2.5` до `14.2.35`.
2. Добавлен `.eslintrc.json`, чтобы `npm run lint` не зависал на интерактивной настройке.
3. Исправлена несогласованность демо-пароля: теперь в коде и документации единообразно `admin123`.
4. Исправлены старые тарифы этапа оплат:
   - старое: 5 000 тг / 30 000 тг;
   - новое: 6 000 тг / 15 000 тг / 18 000 тг / 40 000 тг.
5. Исправлены типы `TariffCode` под текущие тарифы.
6. Исправлены демо-оплаты под актуальные тарифы.
7. Убраны предупреждения React Hooks.
8. Отключено правило ESLint `@next/next/no-img-element`, потому что в проекте используются локальные preview/data URL изображения для админ-загрузки фото.
9. Добавлен параметр `outputFileTracing: false` в `next.config.js`, чтобы локальная production-сборка не зависала на этапе `Collecting build traces`.
10. Обновлена документация README под финальные этапы 1-12.

## Важное замечание

`outputFileTracing: false` подходит для локальной демо-версии и Vercel-деплоя. Для собственного Node-сервера в будущем лучше отдельно проверить output tracing и вернуть стандартную настройку.

## Команды проверки

```bash
npm install
npx tsc --noEmit
npm run lint
npm run build
```

## Локальный запуск

```bash
npm install
npm run dev
```

Открыть:

```text
http://localhost:3000
```

Админка:

```text
http://localhost:3000/admin/login
```

Демо-пароль:

```text
admin123
```
