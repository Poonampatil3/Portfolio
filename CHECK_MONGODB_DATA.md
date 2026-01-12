# How to Check Contact Form Data in MongoDB

## Method 1: Using Browser (Easiest)

Open your browser and go to:
```
http://localhost:5000/api/contacts
```

This will show all contact form submissions in JSON format.

For analytics data:
```
http://localhost:5000/api/analytics
```

---

## Method 2: Using MongoDB Compass (GUI Tool)

1. Download MongoDB Compass: https://www.mongodb.com/try/download/compass
2. Install and open it
3. Connect to: `mongodb://localhost:27017`
4. Click on database: `portfolio`
5. View collections:
   - `contacts` - All contact form submissions
   - `analytics` - All tracked button clicks

---

## Method 3: Using MongoDB Shell (Command Line)

Open terminal and run:

```bash
mongosh
```

Then run these commands:

```javascript
// Switch to portfolio database
use portfolio

// View all contacts
db.contacts.find().pretty()

// View all analytics
db.analytics.find().pretty()

// Count total contacts
db.contacts.countDocuments()

// View latest 5 contacts
db.contacts.find().sort({createdAt: -1}).limit(5).pretty()

// Find contact by email
db.contacts.find({email: "example@email.com"})

// Delete all contacts (if needed)
db.contacts.deleteMany({})
```

---

## Quick Test

1. Submit a contact form on your website
2. Open browser: http://localhost:5000/api/contacts
3. You should see your submission!
