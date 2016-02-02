var express = require('express'),
    app = express();

app.use(require('stylus').middleware(process.argv[3]));
app.use(express.static(process.argv[3] || path.join(__dirname, 'public')));

app.listen(process.argv[2]);
