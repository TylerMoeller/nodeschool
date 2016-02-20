var HTTP = require('q-io/http');
var url = 'http://localhost:1337/';

HTTP.read(url)
.then(JSON.parse)
.then(console.log)
.then(null, console.error)
.done();
