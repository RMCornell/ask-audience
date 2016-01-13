// Set up Required Libraries for Project
const http = require('http');
const express = require('express');




// Instantiate Express
const app = express();

// Have express serve public directory
app.use(express.static('public'));

// Set up so express will serve index.html if we visit '/'
app.get('/', function(request, response) {
  response.sendFile(__dirname + '/public/index.html');
});

// Tell Server which Port to Listen on
var port = process.env.PORT || 3000;

// Produce a running server by passing app Node's HTTP Module
//var server = http.createServer(app);
//
//server.listen(port, function() {
//  console.log('Listening on port' + port + '.')
//});

// Chain Server creation together in one expression:
var server = http.createServer(app).listen(port, function() {
  console.log('Listening on port' + port + '.');
});


// Set up SocketIO
const socketIO = require('socket.io');
const io = socketIO(server);

// Set up Event Listener for connection on server
// Add ability to display connection count
io.on('connection', function(socket) {
  console.log('User has connected.', io.engine.clientsCount);

  // Emit connection count to the client
  io.sockets.emit('usersConnected', io.engine.clientsCount);

  // Make note of when user disconnects
  socket.on('disconnect', function() {
    console.log('A user has disconnected', io.engine.clientsCount)
  })
});






// Export Server so we can use it later on
module.exports = server;




