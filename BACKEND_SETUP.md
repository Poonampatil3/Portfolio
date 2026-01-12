# Backend Setup Guide

## Quick Start

### Step 1: Install MongoDB
1. Download MongoDB Community Server: https://www.mongodb.com/try/download/community
2. Install with default settings
3. MongoDB will start automatically

### Step 2: Install Backend Dependencies
```bash
cd backend
npm install
```

### Step 3: Start Backend Server

**Option A - Using batch file (Windows):**
```bash
# From Portfolio root directory
start-backend.bat
```

**Option B - Manual:**
```bash
cd backend
npm start
```

### Step 4: Verify Backend is Running
Open browser and go to: http://localhost:5000
You should see: `{"message":"Portfolio Backend API","status":"running"}`

### Step 5: Start Frontend
```bash
# In a new terminal, from Portfolio root
npm run dev
```

## Troubleshooting

### Error: "Network error. Please check if backend is running."
- Make sure MongoDB is running
- Make sure backend server is running on port 5000
- Check http://localhost:5000 in browser

### Error: "MongoDB connection failed"
- Install MongoDB from https://www.mongodb.com/try/download/community
- Start MongoDB service:
  - Windows: MongoDB starts automatically after installation
  - Or run: `mongod` in terminal

### Port 5000 already in use
Edit `backend/.env` and change PORT to another number (e.g., 5001)
Then update `src/utils/api.js` API_URL accordingly

## Testing

### Test Contact Form:
1. Go to http://localhost:3000/contact
2. Fill and submit form
3. Check backend terminal for confirmation

### Test Analytics:
1. Click any tracked button (View My Work, Download Resume, etc.)
2. View analytics: http://localhost:5000/api/analytics

### View Saved Contacts:
http://localhost:5000/api/contacts
