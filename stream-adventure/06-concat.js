var concat = require('concat-stream'),
    readStream = process.stdin,
    concatStream = concat(gotText);

function gotText(textBuffer) {
  console.log(textBuffer.toString()
                        .split('')
                        .reverse()
                        .join(''));
}

readStream.pipe(concatStream);
