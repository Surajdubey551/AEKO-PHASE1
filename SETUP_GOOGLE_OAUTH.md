# 🚀 Quick Google OAuth Setup (5 Minutes)

## Step-by-Step Instructions

### Step 1: Go to Google Cloud Console
👉 **Click here:** https://console.cloud.google.com/apis/credentials

### Step 2: Create a Project (if you don't have one)
1. Click the project dropdown at the top (next to "Google Cloud")
2. Click **"New Project"**
3. Name it: `Aeko Creative Suite`
4. Click **"Create"**
5. Wait a few seconds, then select your new project from the dropdown

### Step 3: Enable Google Identity Services API
1. In the left sidebar, click **"APIs & Services"** → **"Library"**
2. Search for: `Google Identity Services API`
3. Click on it
4. Click **"Enable"** button
5. Wait for it to enable (takes ~10 seconds)

### Step 4: Configure OAuth Consent Screen (First Time Only)
1. Go to **"APIs & Services"** → **"OAuth consent screen"**
2. Select **"External"** → Click **"Create"**
3. Fill in:
   - **App name:** `Aeko Creative Suite`
   - **User support email:** Your email
   - **Developer contact:** Your email
4. Click **"Save and Continue"**
5. On "Scopes" page, click **"Save and Continue"** (no changes needed)
6. On "Test users" page, click **"Save and Continue"** (no changes needed)
7. On "Summary" page, click **"Back to Dashboard"**

### Step 5: Create OAuth Client ID
1. Go to **"APIs & Services"** → **"Credentials"**
2. Click **"+ CREATE CREDENTIALS"** at the top
3. Select **"OAuth client ID"**
4. Choose **"Web application"** as the application type
5. Fill in:
   - **Name:** `Aeko Frontend`
   - **Authorized JavaScript origins:**
     - Click **"+ ADD URI"**
     - Enter: `http://localhost:8080`
     - Click **"+ ADD URI"** again
     - Enter: `https://aeko-ivory.vercel.app` (for production)
6. Click **"CREATE"**
7. **IMPORTANT:** Copy the **Client ID** (it looks like: `123456789-abcdefg.apps.googleusercontent.com`)
   - ⚠️ You won't see this again, so copy it now!

### Step 6: Add Client ID to Your Project
1. Open your `.env` file in the project root
2. Find the line: `VITE_GOOGLE_CLIENT_ID=`
3. Replace it with: `VITE_GOOGLE_CLIENT_ID=your_copied_client_id_here`
   - Example: `VITE_GOOGLE_CLIENT_ID=123456789-abcdefg.apps.googleusercontent.com`

### Step 7: Restart Your Dev Server
1. Stop your frontend server (press `Ctrl+C` in the terminal)
2. Start it again: `npm run dev`

### Step 8: Test It!
1. Go to: `http://localhost:8080/auth/sign-in`
2. Click **"Continue with Google"**
3. You should see Google's account picker! 🎉

---

## ✅ Quick Checklist

- [ ] Created Google Cloud project
- [ ] Enabled Google Identity Services API
- [ ] Configured OAuth consent screen
- [ ] Created OAuth Client ID
- [ ] Added `http://localhost:8080` to Authorized JavaScript origins
- [ ] Copied the Client ID
- [ ] Added Client ID to `.env` file
- [ ] Restarted dev server
- [ ] Tested Google sign-in button

---

## 🆘 Troubleshooting

### "redirect_uri_mismatch" error
- Make sure `http://localhost:8080` is in "Authorized JavaScript origins"
- No trailing slash! Use `http://localhost:8080` not `http://localhost:8080/`

### Button still says "not configured"
- Check `.env` file has `VITE_GOOGLE_CLIENT_ID=your_id`
- Restart dev server after adding the ID
- Make sure no extra spaces around the `=`

### Google popup doesn't appear
- Open browser console (F12) → Check for errors
- Verify Client ID is correct in `.env`
- Try hard refresh (Ctrl+Shift+R)

---

**Need help?** Check the console errors or let me know what step you're stuck on!


## Step-by-Step Instructions

### Step 1: Go to Google Cloud Console
👉 **Click here:** https://console.cloud.google.com/apis/credentials

### Step 2: Create a Project (if you don't have one)
1. Click the project dropdown at the top (next to "Google Cloud")
2. Click **"New Project"**
3. Name it: `Aeko Creative Suite`
4. Click **"Create"**
5. Wait a few seconds, then select your new project from the dropdown

### Step 3: Enable Google Identity Services API
1. In the left sidebar, click **"APIs & Services"** → **"Library"**
2. Search for: `Google Identity Services API`
3. Click on it
4. Click **"Enable"** button
5. Wait for it to enable (takes ~10 seconds)

### Step 4: Configure OAuth Consent Screen (First Time Only)
1. Go to **"APIs & Services"** → **"OAuth consent screen"**
2. Select **"External"** → Click **"Create"**
3. Fill in:
   - **App name:** `Aeko Creative Suite`
   - **User support email:** Your email
   - **Developer contact:** Your email
4. Click **"Save and Continue"**
5. On "Scopes" page, click **"Save and Continue"** (no changes needed)
6. On "Test users" page, click **"Save and Continue"** (no changes needed)
7. On "Summary" page, click **"Back to Dashboard"**

### Step 5: Create OAuth Client ID
1. Go to **"APIs & Services"** → **"Credentials"**
2. Click **"+ CREATE CREDENTIALS"** at the top
3. Select **"OAuth client ID"**
4. Choose **"Web application"** as the application type
5. Fill in:
   - **Name:** `Aeko Frontend`
   - **Authorized JavaScript origins:**
     - Click **"+ ADD URI"**
     - Enter: `http://localhost:8080`
     - Click **"+ ADD URI"** again
     - Enter: `https://aeko-ivory.vercel.app` (for production)
6. Click **"CREATE"**
7. **IMPORTANT:** Copy the **Client ID** (it looks like: `123456789-abcdefg.apps.googleusercontent.com`)
   - ⚠️ You won't see this again, so copy it now!

### Step 6: Add Client ID to Your Project
1. Open your `.env` file in the project root
2. Find the line: `VITE_GOOGLE_CLIENT_ID=`
3. Replace it with: `VITE_GOOGLE_CLIENT_ID=your_copied_client_id_here`
   - Example: `VITE_GOOGLE_CLIENT_ID=123456789-abcdefg.apps.googleusercontent.com`

### Step 7: Restart Your Dev Server
1. Stop your frontend server (press `Ctrl+C` in the terminal)
2. Start it again: `npm run dev`

### Step 8: Test It!
1. Go to: `http://localhost:8080/auth/sign-in`
2. Click **"Continue with Google"**
3. You should see Google's account picker! 🎉

---

## ✅ Quick Checklist

- [ ] Created Google Cloud project
- [ ] Enabled Google Identity Services API
- [ ] Configured OAuth consent screen
- [ ] Created OAuth Client ID
- [ ] Added `http://localhost:8080` to Authorized JavaScript origins
- [ ] Copied the Client ID
- [ ] Added Client ID to `.env` file
- [ ] Restarted dev server
- [ ] Tested Google sign-in button

---

## 🆘 Troubleshooting

### "redirect_uri_mismatch" error
- Make sure `http://localhost:8080` is in "Authorized JavaScript origins"
- No trailing slash! Use `http://localhost:8080` not `http://localhost:8080/`

### Button still says "not configured"
- Check `.env` file has `VITE_GOOGLE_CLIENT_ID=your_id`
- Restart dev server after adding the ID
- Make sure no extra spaces around the `=`

### Google popup doesn't appear
- Open browser console (F12) → Check for errors
- Verify Client ID is correct in `.env`
- Try hard refresh (Ctrl+Shift+R)

---

**Need help?** Check the console errors or let me know what step you're stuck on!

