var express = require('express')
var bodyparser = require('body-parser')
var app = express();

<<<<<<< HEAD
var bodyparser = require('body-parser')
=======
>>>>>>> 359772964cffbe62ef5c778cbae2a863e2311144
app.use(bodyparser.urlencoded({extended: false}))

app.post('/form', function(req, res) {
	res.send(req.body.str.split('').reverse().join(''))
})
app.listen(process.argv[2])
