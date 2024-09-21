// server.js

const express = require('express');
const app = express();
const PORT = 8080;

// Define a route to return "Hello World"
app.get('/', (req, res) => {
    res.send('Hello World');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
