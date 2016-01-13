// Establish a websocket connection from the Client
var socket = io();

// set connectionCount Variable for element where values will be sent
var connectionCount = document.getElementById('connection-count');

// set statusMessage Variable for element where value will be sent
var statusMessage = document.getElementById('status-message');

// set buttons variable for getting feedback from buttons
var buttons = document.querySelectorAll('#choices button');

// set vote tally variable for element where value will be sent
var voteTally = document.getElementById('vote-tally');

// Add socket connection to display users connected
socket.on('usersConnected', function(count) {
  connectionCount.innerText = 'Connected Users: ' + count;
});

// Add socket connection to display status message
socket.on('statusMessage', function(message) {
  statusMessage.innerText = message;
});

// Add socket Connection to display votes
socket.on('voteCount', function (votes) {
  console.log(votes);
});

// Add For Loop to send socket connection info back to server
for(var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function() {
    socket.send('voteCast', this.innerText);
  })
}






