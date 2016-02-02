var q = require('q'),
    def = q.defer();

def.promise.then(console.log, printError);
setTimeout(def.reject, 300, new Error('REJECTED!'));

function printError(error) {
  console.log(error.message);
}
