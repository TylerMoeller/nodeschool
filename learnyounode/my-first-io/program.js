var fs = require('fs')

var fileContents = fs.readFileSync(process.argv[2])
var fileLines = fileContents.toString().split('\n').length - 1

console.log(fileLines)
