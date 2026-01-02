# Google OAuth Setup Guide

## Quick Setup (5 minutes)

### Step 1: Create Google OAuth Credentials

1. **Go to Google Cloud Console:**
   - Visit: https://console.cloud.google.com/

2. **Create or Select a Project:**
   - Click the project dropdown at the top
   - Click "New Project" or select an existing one
   - Name it (e.g., "Aeko Creative Suite")

3. **Enable Google Identity Services API:**
   - Go to "APIs & Services" → "Library"
   - Search for "Google Identity Services API"
   - Click "Enable"

4. **Create OAuth 2.0 Client ID:**
   - Go to "APIs & Services" → "Credentials"
   - Click "Create Credentials" → "OAuth client ID"
   - If prompted, configure OAuth consent screen first:
     - User Type: "External" (for testing)
     - App name: "Aeko Creative Suite"
     - Support email: your email
     - Click "Save and Continue" through the steps
   
5. **Create the Client ID:**
   - Application type: **Web application**
   - Name: "Aeko Frontend"
   - **Authorized JavaScript origins:**
     - `http://localhost:8080` (for local development)
     - `https://aeko-ivory.vercel.app` (for production - add this later)
   - Click "Create"
   - **Copy the Client ID** (looks like: `123456789-abcdefghijklmnop.apps.googleusercontent.com`)

### Step 2: Add to Your Project

1. **Create `.env` file** in the root directory (`C:\Users\user\.cursor\aeko-creative-suite\.env`):

```env
VITE_API_URL=http://localhost:5000
VITE_GOOGLE_CLIENT_ID=your_client_id_here
```

2. **Replace `your_client_id_here`** with the Client ID you copied

3. **Restart your frontend dev server:**
   - Stop the server (Ctrl+C)
   - Run `npm run dev` again

### Step 3: Test

1. Go to: `http://localhost:8080/auth/sign-in`
2. Click "Continue with Google"
3. You should see Google's account picker!
4. After selecting an account, you'll be logged in automatically

## Troubleshooting

### "Google OAuth is not configured"
- Make sure `.env` file exists in the root directory
- Make sure `VITE_GOOGLE_CLIENT_ID` is set correctly
- Restart the dev server after adding the variable

### "Error 400: redirect_uri_mismatch"
- Make sure `http://localhost:8080` is in "Authorized JavaScript origins" in Google Console
- Make sure there's no trailing slash

### Google popup doesn't appear
- Check browser console (F12) for errors
- Make sure the Client ID is correct
- Try hard refresh (Ctrl+Shift+R)

## Notes

- The `.env` file is already in `.gitignore`, so it won't be committed
- For production, add your production URL to "Authorized JavaScript origins"
- You can use the same Client ID for both local and production

---

**That's it!** Once configured, Google sign-in will work seamlessly. 🎉


## Quick Setup (5 minutes)

### Step 1: Create Google OAuth Credentials

1. **Go to Google Cloud Console:**
   - Visit: https://console.cloud.google.com/

2. **Create or Select a Project:**
   - Click the project dropdown at the top
   - Click "New Project" or select an existing one
   - Name it (e.g., "Aeko Creative Suite")

3. **Enable Google Identity Services API:**
   - Go to "APIs & Services" → "Library"
   - Search for "Google Identity Services API"
   - Click "Enable"

4. **Create OAuth 2.0 Client ID:**
   - Go to "APIs & Services" → "Credentials"
   - Click "Create Credentials" → "OAuth client ID"
   - If prompted, configure OAuth consent screen first:
     - User Type: "External" (for testing)
     - App name: "Aeko Creative Suite"
     - Support email: your email
     - Click "Save and Continue" through the steps
   
5. **Create the Client ID:**
   - Application type: **Web application**
   - Name: "Aeko Frontend"
   - **Authorized JavaScript origins:**
     - `http://localhost:8080` (for local development)
     - `https://aeko-ivory.vercel.app` (for production - add this later)
   - Click "Create"
   - **Copy the Client ID** (looks like: `123456789-abcdefghijklmnop.apps.googleusercontent.com`)

### Step 2: Add to Your Project

1. **Create `.env` file** in the root directory (`C:\Users\user\.cursor\aeko-creative-suite\.env`):

```env
VITE_API_URL=http://localhost:5000
VITE_GOOGLE_CLIENT_ID=your_client_id_here
```

2. **Replace `your_client_id_here`** with the Client ID you copied

3. **Restart your frontend dev server:**
   - Stop the server (Ctrl+C)
   - Run `npm run dev` again

### Step 3: Test

1. Go to: `http://localhost:8080/auth/sign-in`
2. Click "Continue with Google"
3. You should see Google's account picker!
4. After selecting an account, you'll be logged in automatically

## Troubleshooting

### "Google OAuth is not configured"
- Make sure `.env` file exists in the root directory
- Make sure `VITE_GOOGLE_CLIENT_ID` is set correctly
- Restart the dev server after adding the variable

### "Error 400: redirect_uri_mismatch"
- Make sure `http://localhost:8080` is in "Authorized JavaScript origins" in Google Console
- Make sure there's no trailing slash

### Google popup doesn't appear
- Check browser console (F12) for errors
- Make sure the Client ID is correct
- Try hard refresh (Ctrl+Shift+R)

## Notes

- The `.env` file is already in `.gitignore`, so it won't be committed
- For production, add your production URL to "Authorized JavaScript origins"
- You can use the same Client ID for both local and production

---

**That's it!** Once configured, Google sign-in will work seamlessly. 🎉

