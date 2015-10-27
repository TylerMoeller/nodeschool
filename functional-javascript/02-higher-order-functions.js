var num = process.argv[2];

function repeat(operation, num) {

  if (!num || typeof num !== 'number' || num < 0) {
    return console.log('Error: Please pass a positive number as an argument!');
  }

  operation();
  return repeat(operation, num - num);
}

// Do not remove the line below
module.exports = repeat;
