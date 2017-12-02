const http = require('http');

http.get(process.argv[2], (response) => {
  response.setEncoding('utf8').on('error', console.error).on('data', console.log);
});
