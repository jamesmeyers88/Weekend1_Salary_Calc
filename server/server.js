//Require in express from it's Node module
// express is a function, but you wouldn't
//know that just by looking at it.
const express = require('express');

// This give us back an express app - it's an object
const app = express();

// Tell express where to look for files when getting a
// request from someone's browser
app.use(express.static('server/public'));

// Start listening for requests
const port = 5000;
app.listen(port, function () {
    console.log(`Listening on port ${port}`);

});