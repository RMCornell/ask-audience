// Set up Required Libraries for Project
const http = require('http');
const express = require('express');

// Instantiate Express
const app = express();

// Have express serve public directory
app.use(express.static('public'));

// Set up so express will serve index.html if we visit '/'
app.get('/', function(request, response) {
  response.sendFile(__dirname + '/public/index.htmel');
});

// Tell Server which Port to Listen on
var port = process.env.PORT || 3000;

// Produce a running server by passing app Node's HTTP Module
var server = http.createServer(app);

server.listen(port, function() {
  console.log('Listening on port' + port + '.')
});

// Chain Server creation together in one expression:
//var server = http.createServer(app).listen(port, function() {
//  console.log('Listening on port' + port + '.');
//});


// Export Server so we can use it later on
module.exports = server;



