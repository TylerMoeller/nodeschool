var express = require('express')
var app = express()
var fs = require('fs')

app.get('/books', function(req, res){
  var filename = process.argv[3]
  fs.readFile(filename, function(e, data) {
    books = JSON.parse(data)
    res.json(books)
  })
})

app.listen(process.argv[2])