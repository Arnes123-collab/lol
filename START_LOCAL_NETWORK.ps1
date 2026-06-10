Set-Location $PSScriptRoot
Write-Host "AGASHKA POWERLIFTING - LOCAL NETWORK START" -ForegroundColor Yellow
npm config set registry https://registry.npmjs.org/
npm config delete proxy 2>$null
npm config delete https-proxy 2>$null
npm install --legacy-peer-deps --registry=https://registry.npmjs.org/
if ($LASTEXITCODE -ne 0) {
  Write-Host "npm install failed. Enable VPN and run again." -ForegroundColor Red
  Read-Host "Press Enter"
  exit 1
}
Write-Host "Computer: http://localhost:3000" -ForegroundColor Green
Get-NetIPAddress -AddressFamily IPv4 | Where-Object { $_.IPAddress -like "192.168.*" -or $_.IPAddress -like "10.*" -or $_.IPAddress -like "172.*" } | ForEach-Object { Write-Host "Phone: http://$($_.IPAddress):3000" -ForegroundColor Cyan }
npm run dev:network
