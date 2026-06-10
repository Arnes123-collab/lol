@echo off
chcp 65001 >nul
cd /d "%~dp0"
echo ========================================
echo AGASHKA POWERLIFTING - LOCAL START
echo ========================================
echo.
echo Step 1: Installing dependencies from public npm registry...
echo This can take 3-10 minutes on first launch.
echo.
call npm config set registry https://registry.npmjs.org/
call npm config delete proxy >nul 2>nul
call npm config delete https-proxy >nul 2>nul
call npm install --legacy-peer-deps --registry=https://registry.npmjs.org/
if errorlevel 1 (
  echo.
  echo ERROR: npm install failed.
  echo Try enabling VPN, then run this file again.
  pause
  exit /b 1
)
echo.
echo Step 2: Starting network server...
echo Computer: http://localhost:3000
echo Phone: use laptop IPv4 address, for example http://192.168.1.25:3000
echo Phone and laptop must be on the same Wi-Fi.
echo.
for /f "tokens=2 delims=:" %%a in ('ipconfig ^| findstr /C:"IPv4"') do echo Possible phone address: http://%%a:3000
call npm run dev:network
pause
