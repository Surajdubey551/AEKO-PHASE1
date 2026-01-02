# Quick Fix: LLM Not Responding

## The Problem
"Failed to fetch" error means the **backend server is not running**.

## Quick Solution (2 Steps)

### Step 1: Start Backend Server
Open a **new terminal/PowerShell window** and run:

```bash
cd backend
npm run dev
```

You should see:
```
MongoDB Connected: ...
Aeko Creative Suite backend running on port 5000
```

**Keep this terminal open!** The backend must stay running.

### Step 2: Make Sure ModelsLab API Key is Set

1. Check if `backend/.env` file exists
2. If not, create it with:
   ```env
   MONGODB_URI=your_mongodb_uri_or_leave_empty_for_now
   JWT_SECRET=any_random_string
   MODELSLAB_API_KEY=your_modelslab_api_key_here
   PORT=5000
   ```

3. **Get your ModelsLab API key:**
   - Go to: https://modelslab.com
   - Sign up / Login
   - Get your API key from dashboard
   - Add it to `backend/.env`

### Step 3: Test

1. Make sure **both servers are running:**
   - Backend: `http://localhost:5000` (check in browser - should show JSON)
   - Frontend: `http://localhost:8080`

2. Go to: `http://localhost:8080/dashboard/tools`
3. Type a message and click "Send"
4. Should work now! 🎉

---

## If Still Not Working

### Check Browser Console (F12)
- Look for specific error messages
- Share them if you need help

### Check Backend Terminal
- Look for red error messages
- Common issues:
  - MongoDB connection error (can ignore for now if you don't have DB)
  - Missing ModelsLab API key
  - Port 5000 already in use

---

**The backend MUST be running for the LLM to work!**

