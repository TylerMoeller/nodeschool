var fs = require('fs'),
	filename = process.argv[2];

var newLines = fs.readFileSync(filename, "utf8").split('\n').length - 1;

console.log(newLines); // Lesson requires console.log to pass

return newLines;