'use strict';

const express = require('express');
const app = express();

// define endpoint for exercise 1 here

// GET endpoint for /math/circle/:r
app.get('/math/circle/:r', (req, res) => {
    // Extract radius from URL parameter
    const radius = parseFloat(req.params.r);
    
    // Calculate area and circumference
    const area = Math.PI * radius * radius;
    const circumference = 2 * Math.PI * radius;

    // Respond with JSON containing area and circumference
    res.json({ area, circumference });
});


// define endpoint for exercise 2 here


// GET endpoint for /hello/name
app.get('/hello/name', (req, res) => {
    // Extract query parameters
    const { first, last } = req.query;

    // Check if both first and last parameters are provided
    if (!first || !last) {
        // Respond with 400 status code and error message
        return res.status(400).send('Missing Required GET parameters: ' + (!first ? 'first' : 'last'));
    }

    // Respond with plain text message
    res.send(`Hello ${first} ${last }`);
});
// test-> http://localhost:8000/hello/name?first=John&last=Doe


// Start the server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


