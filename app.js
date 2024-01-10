const express = require('express');
const nunjucks = require('nunjucks');

const app = express();
const port = 3000;

// Configure Nunjucks
nunjucks.configure('views', {
    autoescape: true,
    express: app
});

// Middleware for parsing POST requests
app.use(express.urlencoded({ extended: true }));

// Define routes
app.get('/', (req, res) => {
    res.render('index.html');
});

app.post('/calculate', (req, res) => {
    const sideA = parseFloat(req.body.sideA);
    const sideB = parseFloat(req.body.sideB);

    if (isNaN(sideA) || isNaN(sideB)) {
        res.render('index.html', { result: 'Invalid input. Please enter valid numbers.' });
    } else {
        const result = Math.sqrt(sideA ** 2 + sideB ** 2).toFixed(2);
        res.render('index.html', { result: `Result: ${result}` });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
