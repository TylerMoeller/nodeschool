var Q = require('q'),
    def = Q.defer();

function attachTitle(lastName) {
  return 'DR. ' + lastName;
}

def.promise
.then(attachTitle)
.then(console.log);

def.resolve('MANHATTAN');
