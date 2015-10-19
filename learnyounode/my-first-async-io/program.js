var fs = require('fs')

fs.readFile(process.argv[2], 'utf8', function doneReading(err, fileContents) {
	if (err) console.log(err)
  	var fileLines = fileContents.split('\n').length - 1
  	console.log(fileLines)
})
