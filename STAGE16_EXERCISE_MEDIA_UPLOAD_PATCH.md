# Stage16 Patch - загрузка фото и видео упражнений

Исправлено поведение раздела `/admin/exercises`.

Добавлено:
- загрузка фото упражнения через кнопку в карточке редактирования;
- автоматическое сжатие JPG/PNG/WEBP в WEBP;
- загрузка GIF техники;
- загрузка короткого видео MP4/WEBM/MOV;
- вставка ссылок YouTube/Instagram/MP4;
- предпросмотр фото, GIF и видео;
- сохранение media-полей вместе с упражнением;
- индикация в карточке упражнения: фото/GIF/видео есть.

Ограничения локальной версии:
- фото и короткие видео сохраняются в localStorage как Data URL;
- большие видео лучше вставлять ссылкой YouTube/Instagram;
- для домена и настоящей CRM нужно подключить Supabase Storage.

Рекомендуемая серверная схема:
- bucket `exercise-media` в Supabase Storage;
- таблица `exercises` с полями `image_url`, `gif_url`, `video_url`;
- загрузка файла через серверный API `/api/exercises/media`.

Дополнительно добавлен серверный endpoint:

`/api/exercise-media`

Он загружает фото/GIF/видео в Supabase Storage bucket `exercise-media`, если на домене подключены переменные:

- NEXT_PUBLIC_SUPABASE_URL
- NEXT_PUBLIC_SUPABASE_ANON_KEY
- SUPABASE_SERVICE_ROLE_KEY

Если Supabase Storage не подключён, админка автоматически использует локальный fallback через Data URL.
