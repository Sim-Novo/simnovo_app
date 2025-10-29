const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files from public folder
app.use(express.static('public'));

// Home page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Dashboard page
app.get('/dashboard', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'dashboard.html'));
});

// Contact page
app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'contact.html'));
});

// Admin Upload page
app.get('/admin-upload', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'admin-upload.html'));
});

// About page
app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'about.html'));
});

// Start server
app.listen(port, () => {
  console.log(`SimNovo app running at http://127.0.0.1:3000/`);
});
