var express = require('express'),
    app = express(),
    fs = require('fs');

app.get('/books', function(req, res) {
  fs.readFile(process.argv[3], function(err, data) {
    if (err) return res.send(err);
    var books = JSON.parse(data);
    res.json(books);
  });
});

app.listen(process.argv[2]);
