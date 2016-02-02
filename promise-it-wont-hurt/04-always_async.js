var Q = require('q'),
    def = Q.defer();

def.promise.then(console.log);
def.resolve('SECOND');
console.log('FIRST');
