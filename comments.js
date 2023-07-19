// Purpose: to create a web server
// run it in the terminal with node comments.js
// then go to http://localhost:3000/

// create a web server
const express = require('express');
const app = express();

// create a route
app.get('/', (req, res) => {
  res.send('Hello World');
});

// listen on a port
app.listen(3000, () => {
  console.log('Listening on port 3000');
});