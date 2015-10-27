var concat = require('concat-stream')

var readStream = process.stdin;
var concatStream = concat(gotText);

readStream.pipe(concatStream);

function gotText(textBuffer) {
	textString = textBuffer.toString();
	console.log(textString.split("").reverse().join(""));
}
