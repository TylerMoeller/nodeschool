const net = require('net');
const strftime = require('strftime');

const timestamp = strftime('%Y-%m-%d %H:%M');

const server = net.createServer((socket) => {
  socket.end(`${timestamp}\n`);
});

server.listen(Number(process.argv[2]));
