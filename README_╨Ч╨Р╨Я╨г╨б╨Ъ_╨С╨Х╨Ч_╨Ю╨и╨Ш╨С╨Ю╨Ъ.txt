AGASHKA POWERLIFTING - ЗАПУСК БЕЗ ОШИБОК

ВАЖНО:
В этом архиве специально НЕТ package-lock.json и node_modules.
Причина: старый package-lock ссылался на внутренний реестр OpenAI и на вашем ноутбуке давал ETIMEDOUT.
Теперь установка идёт только из официального npm: https://registry.npmjs.org/

КАК ЗАПУСТИТЬ:
1. Распакуйте ZIP.
2. Откройте папку agashka-powerlifting-local.
3. Запустите START_LOCAL_WINDOWS.bat двойным кликом.
4. Дождитесь окончания npm install.
5. На компьютере откройте http://localhost:3000
6. На телефоне откройте адрес вида http://192.168.x.x:3000

Если npm install снова даст ETIMEDOUT:
- включите VPN на ноутбуке;
- снова запустите START_LOCAL_WINDOWS.bat.

НЕ открывайте на телефоне http://0.0.0.0:3000
Это служебный адрес сервера, а не адрес для телефона.

Админка:
http://localhost:3000/admin/login
Пароль: admin123
