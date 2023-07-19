// Create a web server
// To do this, we will use the Express web server framework for Node.js
// http://expressjs.com/
// To install Express:
// npm install --save express
// Create a server.js file in the root of your application directory
// In server.js, add the following code:
// var express = require('express');
// var app = express();
// var port = process.env.PORT || 3000;
// app.use(express.static(__dirname + '/app'));
// app.listen(port);
// console.log('Listening on port: ' + port);
// Start the server
// node server.js
// Navigate to http://localhost:3000/
// You should see the Angular app running in your browser
// Set up the back-end
// We will use the Firebase JavaScript library to interact with Firebase
// https://www.firebase.com/docs/web/libraries/angular/quickstart.html
// To install Firebase:
// npm install --save firebase
// In server.js, add the following code:
// var Firebase = require('firebase');
// var myFirebaseRef = new Firebase('https://flickering-fire-5944.firebaseio.com/');
// myFirebaseRef.set({
//   title: 'Hello World!',