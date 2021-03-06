var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

io.on('connection', function(socket) {
  socket.on('new question', function(msg) {
    io.emit('newQuestion', msg);
  });

  socket.on('new comment', function(msg) {
    io.emit('newComment', msg);
  });
});

http.listen(3000, function() {
  console.log('listening on *:3000');
});
