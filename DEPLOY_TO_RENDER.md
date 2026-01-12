# Deploy Portfolio to Render (Frontend + Backend)

## Part 1: Deploy Backend to Render

### Step 1: Create MongoDB Atlas (Free Cloud Database)
1. Go to https://www.mongodb.com/cloud/atlas/register
2. Create free account
3. Create a FREE cluster (M0)
4. Click "Connect" → "Connect your application"
5. Copy connection string (looks like):
   ```
   mongodb+srv://username:<password>@cluster0.xxxxx.mongodb.net/portfolio
   ```
6. Replace `<password>` with your actual password

### Step 2: Prepare Backend for Deployment
1. Create `.gitignore` in backend folder:
   ```
   node_modules
   .env
   ```

2. Update `backend/package.json` - add engines:
   ```json
   {
     "engines": {
       "node": "18.x"
     }
   }
   ```

### Step 3: Deploy Backend on Render
1. Go to https://render.com (sign up/login)
2. Click "New +" → "Web Service"
3. Connect your GitHub repository
4. Configure:
   - **Name**: portfolio-backend
   - **Root Directory**: backend
   - **Environment**: Node
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Plan**: Free

5. Add Environment Variable:
   - Key: `MONGODB_URI`
   - Value: Your MongoDB Atlas connection string

6. Click "Create Web Service"
7. Wait for deployment (5-10 minutes)
8. Copy your backend URL (e.g., `https://portfolio-backend-xxxx.onrender.com`)

---

## Part 2: Deploy Frontend to Render

### Step 1: Update Frontend API URL
Edit `src/utils/api.js`:
```javascript
const API_URL = 'https://portfolio-backend-xxxx.onrender.com/api';
// Replace with YOUR backend URL from Step 3.8
```

### Step 2: Add Build Script
Update `package.json` in root:
```json
{
  "scripts": {
    "build": "vite build",
    "preview": "vite preview"
  }
}
```

### Step 3: Deploy Frontend on Render
1. Go to Render Dashboard
2. Click "New +" → "Static Site"
3. Connect your GitHub repository
4. Configure:
   - **Name**: portfolio-frontend
   - **Root Directory**: (leave empty)
   - **Build Command**: `npm install && npm run build`
   - **Publish Directory**: `dist`

5. Click "Create Static Site"
6. Wait for deployment
7. Your site is live! 🎉

---

## Alternative: Deploy Both on Same Render Service

### Option: Backend serves Frontend (Single deployment)

1. Move frontend build to backend:
   ```bash
   npm run build
   # This creates 'dist' folder
   ```

2. Update `backend/server.js` - add before routes:
   ```javascript
   const path = require('path');
   
   // Serve static files
   app.use(express.static(path.join(__dirname, '../dist')));
   
   // All other routes return index.html
   app.get('*', (req, res) => {
     res.sendFile(path.join(__dirname, '../dist/index.html'));
   });
   ```

3. Deploy only backend folder to Render
4. Single URL for everything!

---

## Important Notes

### Free Tier Limitations:
- Backend sleeps after 15 min inactivity
- First request takes 30-60 seconds to wake up
- 750 hours/month free

### Keep Backend Awake (Optional):
Use cron-job.org to ping your backend every 10 minutes:
```
https://portfolio-backend-xxxx.onrender.com
```

---

## Quick Checklist

✅ MongoDB Atlas account created  
✅ Backend deployed on Render  
✅ Environment variable MONGODB_URI added  
✅ Backend URL copied  
✅ Frontend API_URL updated  
✅ Frontend deployed on Render  
✅ Test contact form on live site  

Done! 🚀
