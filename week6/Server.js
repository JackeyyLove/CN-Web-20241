const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import the cors package
const api = require('./api');

const port = 3005;
const app = express();

app.use(cors()); // Enable CORS

app.listen(port, function () {
    console.log("Server is listening at port:" + port);
});

// Parses the text as url encoded data
app.use(bodyParser.urlencoded({ extended: true }));

// Parses the text as json
app.use(bodyParser.json());

app.use('/api', api);