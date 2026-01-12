# Portfolio Backend

## Setup Instructions

### 1. Install MongoDB
Download and install MongoDB from https://www.mongodb.com/try/download/community

### 2. Install Dependencies
```bash
cd backend
npm install
```

### 3. Configure Environment
Edit `.env` file if needed:
```
MONGODB_URI=mongodb://localhost:27017/portfolio
PORT=5000
```

### 4. Start MongoDB
```bash
mongod
```

### 5. Start Backend Server
```bash
npm run dev
```

Server will run on http://localhost:5000

## API Endpoints

- POST `/api/contact` - Submit contact form
- POST `/api/analytics` - Track user actions
- GET `/api/contacts` - Get all contact messages (admin)
- GET `/api/analytics` - Get analytics data (admin)

## Frontend Integration

The frontend automatically connects to the backend API for:
- Contact form submissions
- Tracking button clicks (View My Work, Download Resume, Get In Touch, View GitHub)
