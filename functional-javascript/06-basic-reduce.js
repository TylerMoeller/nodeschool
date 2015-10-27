var inputWords = process.argv[2];

function countWords(inputWords) {

  return inputWords.reduce(function(a, b, index, array) {
    if (a[b]) {a[b] = a[b] + 1;} else {a[b] = 1;}

    return a;
  }, {});
}

module.exports = countWords;
