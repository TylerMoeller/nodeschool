var sum = 0;

for (var i = 2; i < process.argv.length; i++) {
  if (process.argv[i].match(/\d/g)) {
    sum += Number(process.argv[i]);
  }
}

console.log(sum);
