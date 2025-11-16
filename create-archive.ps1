# Quick Archive Creation Script

# Run this PowerShell script to create the client delivery archive

# 1. Navigate to project directory
cd "D:\CLIENTS\DEMO\Cab Psy"

# 2. Create archive destination
$archivePath = "D:\CLIENTS\DEMO\maria-popescu-archive"
$zipPath = "D:\CLIENTS\DEMO\maria-popescu-website.zip"

# Remove if exists
if (Test-Path $archivePath) {
    Remove-Item $archivePath -Recurse -Force
}
if (Test-Path $zipPath) {
    Remove-Item $zipPath -Force
}

# 3. Create archive directory
New-Item -ItemType Directory -Path $archivePath -Force | Out-Null

Write-Host "Creating archive..." -ForegroundColor Green

# 4. Copy documentation
Write-Host "  Copying documentation..." -ForegroundColor Yellow
Copy-Item "README.md" $archivePath
Copy-Item "TECHNICAL-HANDOVER.md" $archivePath
Copy-Item "DOCUMENT-CLIENT-ROMANIAN.md" $archivePath
Copy-Item "SEO-SETUP.md" $archivePath
Copy-Item "ARCHIVE-INSTRUCTIONS.md" $archivePath
Copy-Item "INSTALLATION-INSTRUCTIONS.txt" $archivePath

# 5. Copy source code
Write-Host "  Copying source code..." -ForegroundColor Yellow
Copy-Item "src" -Destination $archivePath -Recurse

# 6. Copy public assets
Write-Host "  Copying public assets..." -ForegroundColor Yellow
Copy-Item "public" -Destination $archivePath -Recurse

# 7. Copy configuration files
Write-Host "  Copying configuration..." -ForegroundColor Yellow
Copy-Item "index.html" $archivePath
Copy-Item "package.json" $archivePath
Copy-Item "package-lock.json" $archivePath
Copy-Item "tsconfig.json" $archivePath
Copy-Item "tsconfig.app.json" $archivePath
Copy-Item "tsconfig.node.json" $archivePath
Copy-Item "tailwind.config.js" $archivePath
Copy-Item "postcss.config.js" $archivePath
Copy-Item "vite.config.ts" $archivePath
Copy-Item "eslint.config.js" $archivePath
Copy-Item ".gitignore" $archivePath

# 8. Create ZIP file
Write-Host "  Creating ZIP archive..." -ForegroundColor Yellow
Compress-Archive -Path "$archivePath\*" -DestinationPath $zipPath -Force

# 9. Calculate size
$zipSize = (Get-Item $zipPath).Length / 1MB
Write-Host ""
Write-Host "Archive created successfully!" -ForegroundColor Green
Write-Host "Location: $zipPath" -ForegroundColor Cyan
Write-Host "Size: $([math]::Round($zipSize, 2)) MB" -ForegroundColor Cyan
Write-Host ""
Write-Host "Next steps:" -ForegroundColor Yellow
Write-Host "  1. Upload to Google Drive"
Write-Host "  2. Share with client"
Write-Host "  3. Send payment reminder (310 EUR)"
Write-Host ""

# 10. Open folder
Start-Process "explorer.exe" -ArgumentList "/select,`"$zipPath`""
