var net = require('net'),
    strftime = require('strftime'),
    timestamp = strftime('%Y-%m-%d %H:%M');

var server = net.createServer(function(socket) {
  socket.end(timestamp + '\n');
});

server.listen(Number(process.argv[2]));
