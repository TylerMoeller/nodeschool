var Q = require('q'),
    def = Q.defer(),
    data;

function parsedPromised(invalidJSON) {
  try {
    data = JSON.parse(invalidJSON);
  } catch (error) {
    def.reject(error);
  }

  def.resolve(data);
  return def.promise;
}

parsedPromised(process.argv[2]).then(null, console.log);
