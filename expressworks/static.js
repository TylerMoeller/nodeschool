/*eslint-env node*/

'use strict';
var express = require('express');
var app = express();
var port = process.argv[2];
var route = process.argv[3];

app.use(express.static(route || path.join(__dirname, "public")));

app.listen(port);
