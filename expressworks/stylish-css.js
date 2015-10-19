var express = require('express')
<<<<<<< HEAD
var app = express();

app.use(require('stylus').middleware(process.argv[3]));
app.use(express.static(process.argv[3] || path.join(__dirname, 'public')));

=======
var app = express()

app.use(express.static(process.argv[3] || path.join(__dirname, 'index')));
app.use(require('stylus').middleware(process.argv[3]));
>>>>>>> 359772964cffbe62ef5c778cbae2a863e2311144
app.listen(process.argv[2]);
