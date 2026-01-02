# Backend Deployment Guide

## 🚀 Quick Deploy Options

### Option 1: Render (Recommended - Free Tier Available)

1. **Go to [Render.com](https://render.com)** and sign up/login

2. **Create New Web Service:**
   - Click "New +" → "Web Service"
   - Connect your GitHub repository
   - Select the repository

3. **Configure Settings:**
   - **Name:** `aeko-backend` (or any name)
   - **Root Directory:** `backend`
   - **Environment:** `Node`
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
   - **Plan:** Free (or paid)

4. **Add Environment Variables:**
   Click "Environment" tab and add:
   ```
   MONGODB_URI=your_mongodb_atlas_uri
   JWT_SECRET=your_jwt_secret_key
   MODELSLAB_API_KEY=your_modelslab_api_key
   NODE_ENV=production
   ```
   (PORT is auto-set by Render)

5. **Deploy:**
   - Click "Create Web Service"
   - Wait for deployment (2-5 minutes)
   - Copy your backend URL (e.g., `https://aeko-backend.onrender.com`)

6. **Update Vercel Frontend:**
   - Go to your Vercel project settings
   - Add environment variable:
     ```
     VITE_API_URL=https://aeko-backend.onrender.com
     ```
   - Redeploy frontend

---

### Option 2: Railway (Free Trial)

1. **Go to [Railway.app](https://railway.app)** and sign up

2. **New Project:**
   - Click "New Project"
   - "Deploy from GitHub repo"
   - Select your repository

3. **Configure:**
   - Root Directory: `backend`
   - Build Command: (auto-detected)
   - Start Command: `npm start`

4. **Add Environment Variables:**
   - Click on your service → Variables
   - Add all variables from `.env`

5. **Deploy:**
   - Railway auto-deploys
   - Get your URL (e.g., `https://aeko-backend.up.railway.app`)

6. **Update Vercel:**
   - Set `VITE_API_URL` in Vercel to Railway URL
   - Redeploy

---

### Option 3: Vercel Serverless Functions

If you want everything on Vercel:

1. **Create `api` folder in root:**
   ```
   api/
   └── llm/
       └── chat.js
   api/
   └── auth/
       ├── register.js
       └── login.js
   ```

2. **Convert Express routes to Vercel serverless functions**

   This requires refactoring. **Easier option:** Use Render/Railway for backend.

---

## ✅ After Deployment

1. **Test Backend:**
   ```bash
   curl https://your-backend-url.onrender.com
   ```
   Should return: `{"success": true, "message": "Backend running"}`

2. **Update Vercel Environment Variable:**
   - Project → Settings → Environment Variables
   - Add: `VITE_API_URL=https://your-backend-url.onrender.com`
   - Redeploy frontend

3. **Test Frontend:**
   - Visit `https://aeko-ivory.vercel.app/dashboard/tools`
   - Should now connect to deployed backend!

---

## 🔧 Troubleshooting

### CORS Issues
If you get CORS errors, update `backend/src/app.js`:
```javascript
app.use(cors({
  origin: ['https://aeko-ivory.vercel.app', 'http://localhost:8080'],
  credentials: true
}));
```

### MongoDB Connection
- Make sure MongoDB Atlas allows connections from `0.0.0.0/0` (all IPs)
- Or add Render/Railway IPs to whitelist

### Environment Variables
- Double-check all variables are set correctly
- Restart service after adding variables

---

## 📝 Quick Checklist

- [ ] Backend deployed (Render/Railway)
- [ ] Environment variables set
- [ ] Backend URL working (test with curl)
- [ ] Vercel `VITE_API_URL` set to backend URL
- [ ] Frontend redeployed
- [ ] Test on production site

---

**Recommended:** Use **Render** - it's free, easy, and works great for Node.js backends! 🚀




## 🚀 Quick Deploy Options

### Option 1: Render (Recommended - Free Tier Available)

1. **Go to [Render.com](https://render.com)** and sign up/login

2. **Create New Web Service:**
   - Click "New +" → "Web Service"
   - Connect your GitHub repository
   - Select the repository

3. **Configure Settings:**
   - **Name:** `aeko-backend` (or any name)
   - **Root Directory:** `backend`
   - **Environment:** `Node`
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
   - **Plan:** Free (or paid)

4. **Add Environment Variables:**
   Click "Environment" tab and add:
   ```
   MONGODB_URI=your_mongodb_atlas_uri
   JWT_SECRET=your_jwt_secret_key
   MODELSLAB_API_KEY=your_modelslab_api_key
   NODE_ENV=production
   ```
   (PORT is auto-set by Render)

5. **Deploy:**
   - Click "Create Web Service"
   - Wait for deployment (2-5 minutes)
   - Copy your backend URL (e.g., `https://aeko-backend.onrender.com`)

6. **Update Vercel Frontend:**
   - Go to your Vercel project settings
   - Add environment variable:
     ```
     VITE_API_URL=https://aeko-backend.onrender.com
     ```
   - Redeploy frontend

---

### Option 2: Railway (Free Trial)

1. **Go to [Railway.app](https://railway.app)** and sign up

2. **New Project:**
   - Click "New Project"
   - "Deploy from GitHub repo"
   - Select your repository

3. **Configure:**
   - Root Directory: `backend`
   - Build Command: (auto-detected)
   - Start Command: `npm start`

4. **Add Environment Variables:**
   - Click on your service → Variables
   - Add all variables from `.env`

5. **Deploy:**
   - Railway auto-deploys
   - Get your URL (e.g., `https://aeko-backend.up.railway.app`)

6. **Update Vercel:**
   - Set `VITE_API_URL` in Vercel to Railway URL
   - Redeploy

---

### Option 3: Vercel Serverless Functions

If you want everything on Vercel:

1. **Create `api` folder in root:**
   ```
   api/
   └── llm/
       └── chat.js
   api/
   └── auth/
       ├── register.js
       └── login.js
   ```

2. **Convert Express routes to Vercel serverless functions**

   This requires refactoring. **Easier option:** Use Render/Railway for backend.

---

## ✅ After Deployment

1. **Test Backend:**
   ```bash
   curl https://your-backend-url.onrender.com
   ```
   Should return: `{"success": true, "message": "Backend running"}`

2. **Update Vercel Environment Variable:**
   - Project → Settings → Environment Variables
   - Add: `VITE_API_URL=https://your-backend-url.onrender.com`
   - Redeploy frontend

3. **Test Frontend:**
   - Visit `https://aeko-ivory.vercel.app/dashboard/tools`
   - Should now connect to deployed backend!

---

## 🔧 Troubleshooting

### CORS Issues
If you get CORS errors, update `backend/src/app.js`:
```javascript
app.use(cors({
  origin: ['https://aeko-ivory.vercel.app', 'http://localhost:8080'],
  credentials: true
}));
```

### MongoDB Connection
- Make sure MongoDB Atlas allows connections from `0.0.0.0/0` (all IPs)
- Or add Render/Railway IPs to whitelist

### Environment Variables
- Double-check all variables are set correctly
- Restart service after adding variables

---

## 📝 Quick Checklist

- [ ] Backend deployed (Render/Railway)
- [ ] Environment variables set
- [ ] Backend URL working (test with curl)
- [ ] Vercel `VITE_API_URL` set to backend URL
- [ ] Frontend redeployed
- [ ] Test on production site

---

**Recommended:** Use **Render** - it's free, easy, and works great for Node.js backends! 🚀



## 🚀 Quick Deploy Options

### Option 1: Render (Recommended - Free Tier Available)

1. **Go to [Render.com](https://render.com)** and sign up/login

2. **Create New Web Service:**
   - Click "New +" → "Web Service"
   - Connect your GitHub repository
   - Select the repository

3. **Configure Settings:**
   - **Name:** `aeko-backend` (or any name)
   - **Root Directory:** `backend`
   - **Environment:** `Node`
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
   - **Plan:** Free (or paid)

4. **Add Environment Variables:**
   Click "Environment" tab and add:
   ```
   MONGODB_URI=your_mongodb_atlas_uri
   JWT_SECRET=your_jwt_secret_key
   MODELSLAB_API_KEY=your_modelslab_api_key
   NODE_ENV=production
   ```
   (PORT is auto-set by Render)

5. **Deploy:**
   - Click "Create Web Service"
   - Wait for deployment (2-5 minutes)
   - Copy your backend URL (e.g., `https://aeko-backend.onrender.com`)

6. **Update Vercel Frontend:**
   - Go to your Vercel project settings
   - Add environment variable:
     ```
     VITE_API_URL=https://aeko-backend.onrender.com
     ```
   - Redeploy frontend

---

### Option 2: Railway (Free Trial)

1. **Go to [Railway.app](https://railway.app)** and sign up

2. **New Project:**
   - Click "New Project"
   - "Deploy from GitHub repo"
   - Select your repository

3. **Configure:**
   - Root Directory: `backend`
   - Build Command: (auto-detected)
   - Start Command: `npm start`

4. **Add Environment Variables:**
   - Click on your service → Variables
   - Add all variables from `.env`

5. **Deploy:**
   - Railway auto-deploys
   - Get your URL (e.g., `https://aeko-backend.up.railway.app`)

6. **Update Vercel:**
   - Set `VITE_API_URL` in Vercel to Railway URL
   - Redeploy

---

### Option 3: Vercel Serverless Functions

If you want everything on Vercel:

1. **Create `api` folder in root:**
   ```
   api/
   └── llm/
       └── chat.js
   api/
   └── auth/
       ├── register.js
       └── login.js
   ```

2. **Convert Express routes to Vercel serverless functions**

   This requires refactoring. **Easier option:** Use Render/Railway for backend.

---

## ✅ After Deployment

1. **Test Backend:**
   ```bash
   curl https://your-backend-url.onrender.com
   ```
   Should return: `{"success": true, "message": "Backend running"}`

2. **Update Vercel Environment Variable:**
   - Project → Settings → Environment Variables
   - Add: `VITE_API_URL=https://your-backend-url.onrender.com`
   - Redeploy frontend

3. **Test Frontend:**
   - Visit `https://aeko-ivory.vercel.app/dashboard/tools`
   - Should now connect to deployed backend!

---

## 🔧 Troubleshooting

### CORS Issues
If you get CORS errors, update `backend/src/app.js`:
```javascript
app.use(cors({
  origin: ['https://aeko-ivory.vercel.app', 'http://localhost:8080'],
  credentials: true
}));
```

### MongoDB Connection
- Make sure MongoDB Atlas allows connections from `0.0.0.0/0` (all IPs)
- Or add Render/Railway IPs to whitelist

### Environment Variables
- Double-check all variables are set correctly
- Restart service after adding variables

---

## 📝 Quick Checklist

- [ ] Backend deployed (Render/Railway)
- [ ] Environment variables set
- [ ] Backend URL working (test with curl)
- [ ] Vercel `VITE_API_URL` set to backend URL
- [ ] Frontend redeployed
- [ ] Test on production site

---

**Recommended:** Use **Render** - it's free, easy, and works great for Node.js backends! 🚀




## 🚀 Quick Deploy Options

### Option 1: Render (Recommended - Free Tier Available)

1. **Go to [Render.com](https://render.com)** and sign up/login

2. **Create New Web Service:**
   - Click "New +" → "Web Service"
   - Connect your GitHub repository
   - Select the repository

3. **Configure Settings:**
   - **Name:** `aeko-backend` (or any name)
   - **Root Directory:** `backend`
   - **Environment:** `Node`
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
   - **Plan:** Free (or paid)

4. **Add Environment Variables:**
   Click "Environment" tab and add:
   ```
   MONGODB_URI=your_mongodb_atlas_uri
   JWT_SECRET=your_jwt_secret_key
   MODELSLAB_API_KEY=your_modelslab_api_key
   NODE_ENV=production
   ```
   (PORT is auto-set by Render)

5. **Deploy:**
   - Click "Create Web Service"
   - Wait for deployment (2-5 minutes)
   - Copy your backend URL (e.g., `https://aeko-backend.onrender.com`)

6. **Update Vercel Frontend:**
   - Go to your Vercel project settings
   - Add environment variable:
     ```
     VITE_API_URL=https://aeko-backend.onrender.com
     ```
   - Redeploy frontend

---

### Option 2: Railway (Free Trial)

1. **Go to [Railway.app](https://railway.app)** and sign up

2. **New Project:**
   - Click "New Project"
   - "Deploy from GitHub repo"
   - Select your repository

3. **Configure:**
   - Root Directory: `backend`
   - Build Command: (auto-detected)
   - Start Command: `npm start`

4. **Add Environment Variables:**
   - Click on your service → Variables
   - Add all variables from `.env`

5. **Deploy:**
   - Railway auto-deploys
   - Get your URL (e.g., `https://aeko-backend.up.railway.app`)

6. **Update Vercel:**
   - Set `VITE_API_URL` in Vercel to Railway URL
   - Redeploy

---

### Option 3: Vercel Serverless Functions

If you want everything on Vercel:

1. **Create `api` folder in root:**
   ```
   api/
   └── llm/
       └── chat.js
   api/
   └── auth/
       ├── register.js
       └── login.js
   ```

2. **Convert Express routes to Vercel serverless functions**

   This requires refactoring. **Easier option:** Use Render/Railway for backend.

---

## ✅ After Deployment

1. **Test Backend:**
   ```bash
   curl https://your-backend-url.onrender.com
   ```
   Should return: `{"success": true, "message": "Backend running"}`

2. **Update Vercel Environment Variable:**
   - Project → Settings → Environment Variables
   - Add: `VITE_API_URL=https://your-backend-url.onrender.com`
   - Redeploy frontend

3. **Test Frontend:**
   - Visit `https://aeko-ivory.vercel.app/dashboard/tools`
   - Should now connect to deployed backend!

---

## 🔧 Troubleshooting

### CORS Issues
If you get CORS errors, update `backend/src/app.js`:
```javascript
app.use(cors({
  origin: ['https://aeko-ivory.vercel.app', 'http://localhost:8080'],
  credentials: true
}));
```

### MongoDB Connection
- Make sure MongoDB Atlas allows connections from `0.0.0.0/0` (all IPs)
- Or add Render/Railway IPs to whitelist

### Environment Variables
- Double-check all variables are set correctly
- Restart service after adding variables

---

## 📝 Quick Checklist

- [ ] Backend deployed (Render/Railway)
- [ ] Environment variables set
- [ ] Backend URL working (test with curl)
- [ ] Vercel `VITE_API_URL` set to backend URL
- [ ] Frontend redeployed
- [ ] Test on production site

---

**Recommended:** Use **Render** - it's free, easy, and works great for Node.js backends! 🚀


