
function doubleAll(numbers) {
  var map = numbers.map(function double(num) {
    return num * 2;
  });

  return map;
}

module.exports = doubleAll;
