var fs = require('fs');
fs.readFile(process.argv[2], 'utf8', function callback (err, fileStr){
	var fileStrArr = fileStr.split('\n');
	console.log(fileStrArr.length - 1);
});