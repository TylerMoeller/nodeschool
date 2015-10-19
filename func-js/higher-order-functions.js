var num = process.argv[2]

function repeat(operation, num) {
console.log(num)
  if (!num) {
    console.log(num)
    return;
  }

      return repeat(operation, --num);
}

// Do not remove the line below
module.exports = repeat;