var marked = require('marked');
var str = process.argv[2];

module.exports = function(str) {
  return marked(str).replace(/@@(.+?)@@/g, '<blink>$1</blink>');
};
