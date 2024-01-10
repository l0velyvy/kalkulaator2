const express = require('express');
const path = require('path');
const inputHandler = require('./inputHandler');
const calculatorRoutes = require('./calculatorRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.use('/calculate', calculatorRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

inputHandler.startInput();