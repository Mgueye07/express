const express = require('express');
const path = require('path');
const checkWorkingHours = require('./middleware/workingHours');

const app = express();
const PORT = 3000;

app.use(express.static('public'));
app.use(checkWorkingHours);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'home.html'));
});

app.get('/services', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'services.html'));
});

app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'contact.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
