var fs = require('fs');
var file = fs.readFileSync(process.argv[2]);
var fileStr = file.toString();
var fileStrArr = fileStr.split('\n');
console.log(fileStrArr.length - 1)