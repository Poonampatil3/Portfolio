const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/portfolio', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ MongoDB Connected Successfully'))
.catch(err => console.log('❌ MongoDB Error:', err));

const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  subject: String,
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const Contact = mongoose.model('Contact', contactSchema);

const analyticsSchema = new mongoose.Schema({
  action: { type: String, required: true },
  page: String,
  timestamp: { type: Date, default: Date.now }
});

const Analytics = mongoose.model('Analytics', analyticsSchema);

app.get('/', (req, res) => {
  res.json({ message: 'Portfolio Backend API', status: 'running' });
});

app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    const newContact = new Contact({ name, email, subject, message });
    await newContact.save();
    res.status(201).json({ success: true, message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Error saving contact:', error);
    res.status(500).json({ success: false, message: 'Failed to send message' });
  }
});

app.post('/api/analytics', async (req, res) => {
  try {
    const { action, page } = req.body;
    const newAnalytic = new Analytics({ action, page });
    await newAnalytic.save();
    res.status(201).json({ success: true });
  } catch (error) {
    console.error('Error saving analytics:', error);
    res.status(500).json({ success: false });
  }
});

app.get('/api/analytics', async (req, res) => {
  try {
    const analytics = await Analytics.find().sort({ timestamp: -1 }).limit(100);
    res.json(analytics);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch analytics' });
  }
});

app.get('/api/contacts', async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch contacts' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`\n✅ Server running on http://localhost:${PORT}`);
  console.log(`📊 API Endpoints:`);
  console.log(`   - POST http://localhost:${PORT}/api/contact`);
  console.log(`   - POST http://localhost:${PORT}/api/analytics`);
  console.log(`   - GET  http://localhost:${PORT}/api/contacts`);
  console.log(`   - GET  http://localhost:${PORT}/api/analytics\n`);
});
