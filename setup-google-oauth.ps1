# PowerShell script to help set up Google OAuth
# Run with: .\setup-google-oauth.ps1

Write-Host "`n🚀 Google OAuth Setup Helper`n" -ForegroundColor Cyan

Write-Host "This script will open the Google Cloud Console pages you need.`n" -ForegroundColor Yellow

# Step 1: Open Credentials page
Write-Host "Step 1: Opening Google Cloud Console Credentials page..." -ForegroundColor Green
Start-Process "https://console.cloud.google.com/apis/credentials"

Start-Sleep -Seconds 2

# Step 2: Open API Library
Write-Host "Step 2: Opening API Library (to enable Google Identity Services API)..." -ForegroundColor Green
Start-Process "https://console.cloud.google.com/apis/library/identitytoolkit.googleapis.com"

Start-Sleep -Seconds 2

Write-Host "`n📋 Next Steps:`n" -ForegroundColor Cyan
Write-Host "1. In the Credentials page, click 'CREATE CREDENTIALS' → 'OAuth client ID'" -ForegroundColor White
Write-Host "2. Choose 'Web application'" -ForegroundColor White
Write-Host "3. Add 'http://localhost:8080' to 'Authorized JavaScript origins'" -ForegroundColor White
Write-Host "4. Copy your Client ID" -ForegroundColor White
Write-Host "5. Add it to your .env file: VITE_GOOGLE_CLIENT_ID=your_client_id_here" -ForegroundColor White
Write-Host "6. Restart your dev server`n" -ForegroundColor White

Write-Host "📖 Full instructions: See SETUP_GOOGLE_OAUTH.md`n" -ForegroundColor Yellow

# Check if .env exists
if (Test-Path ".env") {
    Write-Host "✅ .env file found!" -ForegroundColor Green
    $envContent = Get-Content ".env" -Raw
    if ($envContent -match "VITE_GOOGLE_CLIENT_ID=.+") {
        $clientId = ($envContent -match "VITE_GOOGLE_CLIENT_ID=(.+)") | Out-Null
        Write-Host "✅ Google Client ID is already set in .env" -ForegroundColor Green
    } else {
        Write-Host "⚠️  Google Client ID not set yet. Add it to .env after getting it from Google Console." -ForegroundColor Yellow
    }
} else {
    Write-Host "⚠️  .env file not found. Creating it now..." -ForegroundColor Yellow
    @"
VITE_API_URL=http://localhost:5000
VITE_GOOGLE_CLIENT_ID=
"@ | Out-File -FilePath ".env" -Encoding utf8
    Write-Host "✅ Created .env file!" -ForegroundColor Green
}

Write-Host "`n✨ Setup helper complete! Follow the steps above.`n" -ForegroundColor Cyan

# Run with: .\setup-google-oauth.ps1

Write-Host "`n🚀 Google OAuth Setup Helper`n" -ForegroundColor Cyan

Write-Host "This script will open the Google Cloud Console pages you need.`n" -ForegroundColor Yellow

# Step 1: Open Credentials page
Write-Host "Step 1: Opening Google Cloud Console Credentials page..." -ForegroundColor Green
Start-Process "https://console.cloud.google.com/apis/credentials"

Start-Sleep -Seconds 2

# Step 2: Open API Library
Write-Host "Step 2: Opening API Library (to enable Google Identity Services API)..." -ForegroundColor Green
Start-Process "https://console.cloud.google.com/apis/library/identitytoolkit.googleapis.com"

Start-Sleep -Seconds 2

Write-Host "`n📋 Next Steps:`n" -ForegroundColor Cyan
Write-Host "1. In the Credentials page, click 'CREATE CREDENTIALS' → 'OAuth client ID'" -ForegroundColor White
Write-Host "2. Choose 'Web application'" -ForegroundColor White
Write-Host "3. Add 'http://localhost:8080' to 'Authorized JavaScript origins'" -ForegroundColor White
Write-Host "4. Copy your Client ID" -ForegroundColor White
Write-Host "5. Add it to your .env file: VITE_GOOGLE_CLIENT_ID=your_client_id_here" -ForegroundColor White
Write-Host "6. Restart your dev server`n" -ForegroundColor White

Write-Host "📖 Full instructions: See SETUP_GOOGLE_OAUTH.md`n" -ForegroundColor Yellow

# Check if .env exists
if (Test-Path ".env") {
    Write-Host "✅ .env file found!" -ForegroundColor Green
    $envContent = Get-Content ".env" -Raw
    if ($envContent -match "VITE_GOOGLE_CLIENT_ID=.+") {
        $clientId = ($envContent -match "VITE_GOOGLE_CLIENT_ID=(.+)") | Out-Null
        Write-Host "✅ Google Client ID is already set in .env" -ForegroundColor Green
    } else {
        Write-Host "⚠️  Google Client ID not set yet. Add it to .env after getting it from Google Console." -ForegroundColor Yellow
    }
} else {
    Write-Host "⚠️  .env file not found. Creating it now..." -ForegroundColor Yellow
    @"
VITE_API_URL=http://localhost:5000
VITE_GOOGLE_CLIENT_ID=
"@ | Out-File -FilePath ".env" -Encoding utf8
    Write-Host "✅ Created .env file!" -ForegroundColor Green
}

Write-Host "`n✨ Setup helper complete! Follow the steps above.`n" -ForegroundColor Cyan

