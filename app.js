const express = require('express');
const app = express();
const path = require('path');

// Define a route for serving the HTML page
app.get('/', (req, res) => {
    const htmlPath = path.join(__dirname, 'index.html');
    res.sendFile(htmlPath);
});

app.get('/api', (req, res) => {
    res.send({"data": "Hello World!"});
})

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
