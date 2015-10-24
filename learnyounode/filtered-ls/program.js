var fs = require('fs'),
    path = require('path'),
    dirName = process.argv[2],
    fileExt = "." + process.argv[3];

fs.readdir(dirName, function callback(err,list) {

  if(err) throw err;
  else for(var i=0;i<list.length;i++) {
  
      if (path.extname(list[i]) === fileExt) {

        console.log(list[i]);

      }
    }
  });