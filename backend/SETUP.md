# Backend Setup Guide

## ✅ Quick Setup Checklist

### 1. Install Dependencies
```bash
cd backend
npm install
```

### 2. Create Environment File
Create a `.env` file in the `backend` directory:

```env
# MongoDB Atlas Connection String
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/aeko-creative-suite?retryWrites=true&w=majority

# JWT Secret (use a strong random string)
JWT_SECRET=your_super_secret_jwt_key_minimum_32_characters_long

# ModelsLab API Key
MODELSLAB_API_KEY=your_modelslab_api_key_here

# Server Port (optional, defaults to 5000)
PORT=5000

# Environment (optional)
NODE_ENV=development
```

### 3. Get MongoDB Atlas URI
1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free cluster
3. Create a database user
4. Whitelist your IP (or use `0.0.0.0/0` for development)
5. Get connection string from "Connect" → "Connect your application"
6. Replace `<password>` with your database password

### 4. Get ModelsLab API Key
1. Go to [ModelsLab](https://modelslab.com)
2. Sign up / Login
3. Get your API key from the dashboard
4. Add it to `.env` file

### 5. Generate JWT Secret
Use a strong random string (minimum 32 characters):
```bash
# Option 1: Use Node.js
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"

# Option 2: Use online generator
# Visit: https://randomkeygen.com/
```

### 6. Start the Server

**Development (with auto-reload):**
```bash
npm run dev
```

**Production:**
```bash
npm start
```

### 7. Verify It's Working

Open your browser and visit:
```
http://localhost:5000
```

You should see:
```json
{
  "success": true,
  "message": "Backend running",
  "timestamp": "2024-..."
}
```

## 🧪 Test the API

### Register a User
```bash
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "password": "password123"
  }'
```

### Login
```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "password": "password123"
  }'
```

Save the `token` from the response!

### Test LLM Chat (Protected Route)
```bash
curl -X POST http://localhost:5000/api/llm/chat \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN_HERE" \
  -d '{
    "message": "Hello, how are you?",
    "temperature": 0.7,
    "max_tokens": 1000
  }'
```

## 📁 File Structure

```
backend/
├── src/
│   ├── config/
│   │   └── database.js          # MongoDB connection
│   ├── models/
│   │   └── User.js              # User schema
│   ├── controllers/
│   │   ├── authController.js    # Auth logic
│   │   └── llmController.js    # LLM proxy
│   ├── routes/
│   │   ├── authRoutes.js        # Auth endpoints
│   │   └── llmRoutes.js         # LLM endpoints
│   ├── middleware/
│   │   ├── auth.js              # JWT protection
│   │   └── validation.js       # Request validation
│   ├── app.js                   # Express app
│   └── server.js                # Server entry
├── package.json
├── .env                         # Environment variables (create this)
├── .gitignore
└── README.md
```

## 🔒 Security Notes

- ✅ Never commit `.env` file (already in `.gitignore`)
- ✅ Use strong JWT secrets in production
- ✅ Keep MongoDB credentials secure
- ✅ Use environment variables for all secrets
- ✅ Enable HTTPS in production

## 🐛 Troubleshooting

### MongoDB Connection Error
- Check your MongoDB Atlas connection string
- Verify IP is whitelisted in Atlas
- Check database user credentials

### Port Already in Use
```bash
# Change PORT in .env or kill the process using port 5000
# Windows:
netstat -ano | findstr :5000
taskkill /PID <PID> /F

# Mac/Linux:
lsof -ti:5000 | xargs kill
```

### ModelsLab API Error
- Verify API key is correct
- Check API key has sufficient credits
- Verify network connectivity

## 🚀 Deployment

### Render / Railway / Vercel

1. **Set Environment Variables** in your hosting platform:
   - `MONGODB_URI`
   - `JWT_SECRET`
   - `MODELSLAB_API_KEY`
   - `PORT` (usually auto-set by platform)

2. **Build Settings:**
   - Root Directory: `backend`
   - Build Command: `npm install`
   - Start Command: `npm start`

3. **Update Frontend API URL:**
   - Set `VITE_API_URL` to your deployed backend URL

## ✅ Verification Checklist

- [ ] Dependencies installed (`npm install`)
- [ ] `.env` file created with all variables
- [ ] MongoDB Atlas cluster created and connected
- [ ] ModelsLab API key added
- [ ] JWT secret generated
- [ ] Server starts without errors
- [ ] Health check endpoint works (`GET /`)
- [ ] Can register a user
- [ ] Can login and get token
- [ ] Can call LLM endpoint with token

---

**Backend is ready! 🎉**




## ✅ Quick Setup Checklist

### 1. Install Dependencies
```bash
cd backend
npm install
```

### 2. Create Environment File
Create a `.env` file in the `backend` directory:

```env
# MongoDB Atlas Connection String
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/aeko-creative-suite?retryWrites=true&w=majority

# JWT Secret (use a strong random string)
JWT_SECRET=your_super_secret_jwt_key_minimum_32_characters_long

# ModelsLab API Key
MODELSLAB_API_KEY=your_modelslab_api_key_here

# Server Port (optional, defaults to 5000)
PORT=5000

# Environment (optional)
NODE_ENV=development
```

### 3. Get MongoDB Atlas URI
1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free cluster
3. Create a database user
4. Whitelist your IP (or use `0.0.0.0/0` for development)
5. Get connection string from "Connect" → "Connect your application"
6. Replace `<password>` with your database password

### 4. Get ModelsLab API Key
1. Go to [ModelsLab](https://modelslab.com)
2. Sign up / Login
3. Get your API key from the dashboard
4. Add it to `.env` file

### 5. Generate JWT Secret
Use a strong random string (minimum 32 characters):
```bash
# Option 1: Use Node.js
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"

# Option 2: Use online generator
# Visit: https://randomkeygen.com/
```

### 6. Start the Server

**Development (with auto-reload):**
```bash
npm run dev
```

**Production:**
```bash
npm start
```

### 7. Verify It's Working

Open your browser and visit:
```
http://localhost:5000
```

You should see:
```json
{
  "success": true,
  "message": "Backend running",
  "timestamp": "2024-..."
}
```

## 🧪 Test the API

### Register a User
```bash
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "password": "password123"
  }'
```

### Login
```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "password": "password123"
  }'
```

Save the `token` from the response!

### Test LLM Chat (Protected Route)
```bash
curl -X POST http://localhost:5000/api/llm/chat \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN_HERE" \
  -d '{
    "message": "Hello, how are you?",
    "temperature": 0.7,
    "max_tokens": 1000
  }'
```

## 📁 File Structure

```
backend/
├── src/
│   ├── config/
│   │   └── database.js          # MongoDB connection
│   ├── models/
│   │   └── User.js              # User schema
│   ├── controllers/
│   │   ├── authController.js    # Auth logic
│   │   └── llmController.js    # LLM proxy
│   ├── routes/
│   │   ├── authRoutes.js        # Auth endpoints
│   │   └── llmRoutes.js         # LLM endpoints
│   ├── middleware/
│   │   ├── auth.js              # JWT protection
│   │   └── validation.js       # Request validation
│   ├── app.js                   # Express app
│   └── server.js                # Server entry
├── package.json
├── .env                         # Environment variables (create this)
├── .gitignore
└── README.md
```

## 🔒 Security Notes

- ✅ Never commit `.env` file (already in `.gitignore`)
- ✅ Use strong JWT secrets in production
- ✅ Keep MongoDB credentials secure
- ✅ Use environment variables for all secrets
- ✅ Enable HTTPS in production

## 🐛 Troubleshooting

### MongoDB Connection Error
- Check your MongoDB Atlas connection string
- Verify IP is whitelisted in Atlas
- Check database user credentials

### Port Already in Use
```bash
# Change PORT in .env or kill the process using port 5000
# Windows:
netstat -ano | findstr :5000
taskkill /PID <PID> /F

# Mac/Linux:
lsof -ti:5000 | xargs kill
```

### ModelsLab API Error
- Verify API key is correct
- Check API key has sufficient credits
- Verify network connectivity

## 🚀 Deployment

### Render / Railway / Vercel

1. **Set Environment Variables** in your hosting platform:
   - `MONGODB_URI`
   - `JWT_SECRET`
   - `MODELSLAB_API_KEY`
   - `PORT` (usually auto-set by platform)

2. **Build Settings:**
   - Root Directory: `backend`
   - Build Command: `npm install`
   - Start Command: `npm start`

3. **Update Frontend API URL:**
   - Set `VITE_API_URL` to your deployed backend URL

## ✅ Verification Checklist

- [ ] Dependencies installed (`npm install`)
- [ ] `.env` file created with all variables
- [ ] MongoDB Atlas cluster created and connected
- [ ] ModelsLab API key added
- [ ] JWT secret generated
- [ ] Server starts without errors
- [ ] Health check endpoint works (`GET /`)
- [ ] Can register a user
- [ ] Can login and get token
- [ ] Can call LLM endpoint with token

---

**Backend is ready! 🎉**



## ✅ Quick Setup Checklist

### 1. Install Dependencies
```bash
cd backend
npm install
```

### 2. Create Environment File
Create a `.env` file in the `backend` directory:

```env
# MongoDB Atlas Connection String
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/aeko-creative-suite?retryWrites=true&w=majority

# JWT Secret (use a strong random string)
JWT_SECRET=your_super_secret_jwt_key_minimum_32_characters_long

# ModelsLab API Key
MODELSLAB_API_KEY=your_modelslab_api_key_here

# Server Port (optional, defaults to 5000)
PORT=5000

# Environment (optional)
NODE_ENV=development
```

### 3. Get MongoDB Atlas URI
1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free cluster
3. Create a database user
4. Whitelist your IP (or use `0.0.0.0/0` for development)
5. Get connection string from "Connect" → "Connect your application"
6. Replace `<password>` with your database password

### 4. Get ModelsLab API Key
1. Go to [ModelsLab](https://modelslab.com)
2. Sign up / Login
3. Get your API key from the dashboard
4. Add it to `.env` file

### 5. Generate JWT Secret
Use a strong random string (minimum 32 characters):
```bash
# Option 1: Use Node.js
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"

# Option 2: Use online generator
# Visit: https://randomkeygen.com/
```

### 6. Start the Server

**Development (with auto-reload):**
```bash
npm run dev
```

**Production:**
```bash
npm start
```

### 7. Verify It's Working

Open your browser and visit:
```
http://localhost:5000
```

You should see:
```json
{
  "success": true,
  "message": "Backend running",
  "timestamp": "2024-..."
}
```

## 🧪 Test the API

### Register a User
```bash
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "password": "password123"
  }'
```

### Login
```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "password": "password123"
  }'
```

Save the `token` from the response!

### Test LLM Chat (Protected Route)
```bash
curl -X POST http://localhost:5000/api/llm/chat \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN_HERE" \
  -d '{
    "message": "Hello, how are you?",
    "temperature": 0.7,
    "max_tokens": 1000
  }'
```

## 📁 File Structure

```
backend/
├── src/
│   ├── config/
│   │   └── database.js          # MongoDB connection
│   ├── models/
│   │   └── User.js              # User schema
│   ├── controllers/
│   │   ├── authController.js    # Auth logic
│   │   └── llmController.js    # LLM proxy
│   ├── routes/
│   │   ├── authRoutes.js        # Auth endpoints
│   │   └── llmRoutes.js         # LLM endpoints
│   ├── middleware/
│   │   ├── auth.js              # JWT protection
│   │   └── validation.js       # Request validation
│   ├── app.js                   # Express app
│   └── server.js                # Server entry
├── package.json
├── .env                         # Environment variables (create this)
├── .gitignore
└── README.md
```

## 🔒 Security Notes

- ✅ Never commit `.env` file (already in `.gitignore`)
- ✅ Use strong JWT secrets in production
- ✅ Keep MongoDB credentials secure
- ✅ Use environment variables for all secrets
- ✅ Enable HTTPS in production

## 🐛 Troubleshooting

### MongoDB Connection Error
- Check your MongoDB Atlas connection string
- Verify IP is whitelisted in Atlas
- Check database user credentials

### Port Already in Use
```bash
# Change PORT in .env or kill the process using port 5000
# Windows:
netstat -ano | findstr :5000
taskkill /PID <PID> /F

# Mac/Linux:
lsof -ti:5000 | xargs kill
```

### ModelsLab API Error
- Verify API key is correct
- Check API key has sufficient credits
- Verify network connectivity

## 🚀 Deployment

### Render / Railway / Vercel

1. **Set Environment Variables** in your hosting platform:
   - `MONGODB_URI`
   - `JWT_SECRET`
   - `MODELSLAB_API_KEY`
   - `PORT` (usually auto-set by platform)

2. **Build Settings:**
   - Root Directory: `backend`
   - Build Command: `npm install`
   - Start Command: `npm start`

3. **Update Frontend API URL:**
   - Set `VITE_API_URL` to your deployed backend URL

## ✅ Verification Checklist

- [ ] Dependencies installed (`npm install`)
- [ ] `.env` file created with all variables
- [ ] MongoDB Atlas cluster created and connected
- [ ] ModelsLab API key added
- [ ] JWT secret generated
- [ ] Server starts without errors
- [ ] Health check endpoint works (`GET /`)
- [ ] Can register a user
- [ ] Can login and get token
- [ ] Can call LLM endpoint with token

---

**Backend is ready! 🎉**




## ✅ Quick Setup Checklist

### 1. Install Dependencies
```bash
cd backend
npm install
```

### 2. Create Environment File
Create a `.env` file in the `backend` directory:

```env
# MongoDB Atlas Connection String
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/aeko-creative-suite?retryWrites=true&w=majority

# JWT Secret (use a strong random string)
JWT_SECRET=your_super_secret_jwt_key_minimum_32_characters_long

# ModelsLab API Key
MODELSLAB_API_KEY=your_modelslab_api_key_here

# Server Port (optional, defaults to 5000)
PORT=5000

# Environment (optional)
NODE_ENV=development
```

### 3. Get MongoDB Atlas URI
1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free cluster
3. Create a database user
4. Whitelist your IP (or use `0.0.0.0/0` for development)
5. Get connection string from "Connect" → "Connect your application"
6. Replace `<password>` with your database password

### 4. Get ModelsLab API Key
1. Go to [ModelsLab](https://modelslab.com)
2. Sign up / Login
3. Get your API key from the dashboard
4. Add it to `.env` file

### 5. Generate JWT Secret
Use a strong random string (minimum 32 characters):
```bash
# Option 1: Use Node.js
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"

# Option 2: Use online generator
# Visit: https://randomkeygen.com/
```

### 6. Start the Server

**Development (with auto-reload):**
```bash
npm run dev
```

**Production:**
```bash
npm start
```

### 7. Verify It's Working

Open your browser and visit:
```
http://localhost:5000
```

You should see:
```json
{
  "success": true,
  "message": "Backend running",
  "timestamp": "2024-..."
}
```

## 🧪 Test the API

### Register a User
```bash
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "password": "password123"
  }'
```

### Login
```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "password": "password123"
  }'
```

Save the `token` from the response!

### Test LLM Chat (Protected Route)
```bash
curl -X POST http://localhost:5000/api/llm/chat \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN_HERE" \
  -d '{
    "message": "Hello, how are you?",
    "temperature": 0.7,
    "max_tokens": 1000
  }'
```

## 📁 File Structure

```
backend/
├── src/
│   ├── config/
│   │   └── database.js          # MongoDB connection
│   ├── models/
│   │   └── User.js              # User schema
│   ├── controllers/
│   │   ├── authController.js    # Auth logic
│   │   └── llmController.js    # LLM proxy
│   ├── routes/
│   │   ├── authRoutes.js        # Auth endpoints
│   │   └── llmRoutes.js         # LLM endpoints
│   ├── middleware/
│   │   ├── auth.js              # JWT protection
│   │   └── validation.js       # Request validation
│   ├── app.js                   # Express app
│   └── server.js                # Server entry
├── package.json
├── .env                         # Environment variables (create this)
├── .gitignore
└── README.md
```

## 🔒 Security Notes

- ✅ Never commit `.env` file (already in `.gitignore`)
- ✅ Use strong JWT secrets in production
- ✅ Keep MongoDB credentials secure
- ✅ Use environment variables for all secrets
- ✅ Enable HTTPS in production

## 🐛 Troubleshooting

### MongoDB Connection Error
- Check your MongoDB Atlas connection string
- Verify IP is whitelisted in Atlas
- Check database user credentials

### Port Already in Use
```bash
# Change PORT in .env or kill the process using port 5000
# Windows:
netstat -ano | findstr :5000
taskkill /PID <PID> /F

# Mac/Linux:
lsof -ti:5000 | xargs kill
```

### ModelsLab API Error
- Verify API key is correct
- Check API key has sufficient credits
- Verify network connectivity

## 🚀 Deployment

### Render / Railway / Vercel

1. **Set Environment Variables** in your hosting platform:
   - `MONGODB_URI`
   - `JWT_SECRET`
   - `MODELSLAB_API_KEY`
   - `PORT` (usually auto-set by platform)

2. **Build Settings:**
   - Root Directory: `backend`
   - Build Command: `npm install`
   - Start Command: `npm start`

3. **Update Frontend API URL:**
   - Set `VITE_API_URL` to your deployed backend URL

## ✅ Verification Checklist

- [ ] Dependencies installed (`npm install`)
- [ ] `.env` file created with all variables
- [ ] MongoDB Atlas cluster created and connected
- [ ] ModelsLab API key added
- [ ] JWT secret generated
- [ ] Server starts without errors
- [ ] Health check endpoint works (`GET /`)
- [ ] Can register a user
- [ ] Can login and get token
- [ ] Can call LLM endpoint with token

---

**Backend is ready! 🎉**


