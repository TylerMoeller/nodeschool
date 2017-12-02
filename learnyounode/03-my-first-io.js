const fs = require('fs');

const newLines = fs.readFileSync(process.argv[2], 'utf8');
console.log(newLines.split('\n').length - 1);
