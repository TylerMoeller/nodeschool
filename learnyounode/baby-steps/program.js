/*

// First attempt - works with <<< node program.js 1 2 3 >>> but does not "pass" the learnyounode module test.

console.log(Number(process.argv[2]) + Number(process.argv[3]) + Number(process.argv[4]))
*/

// Working version - accomoodates any number of arguments...no error handling.

var sum = 0

for(i = 2; i < process.argv.length; i++) {
	sum += Number(process.argv[i])
}

console.log(sum)
