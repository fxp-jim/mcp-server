// 1. Import the express library
const express = require('express');

// 2. Create an instance of an Express application
const app = express();

// 3. Define the port the server will run on
const port = 3000;

// 4. Define a handler for GET requests to the root URL "/"
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// 5. Start the server and make it listen for the connections on the port
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});