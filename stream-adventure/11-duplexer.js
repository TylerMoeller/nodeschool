var spawn = require('child_process').spawn,
    duplexer = require('duplexer');

module.exports = function(cmd, args) {
  var task = spawn(cmd, args),
      stream = duplexer(task.stdin, task.stdout);
  return stream;
};
