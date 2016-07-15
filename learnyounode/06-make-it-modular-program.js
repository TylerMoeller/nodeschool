var mymodule = require('./06-make-it-modular-module.js');

mymodule(process.argv[2], process.argv[3], function (err, files) {
  if (err) return err;
  files.forEach(function (file) {
    console.log(file);
  });
});
