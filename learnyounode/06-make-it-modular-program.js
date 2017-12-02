const mymodule = require('./06-make-it-modular-module.js');

mymodule(process.argv[2], process.argv[3], (err, files) => {
  if (err) return err;
  files.forEach((file) => {
    console.log(file);
  });
});
