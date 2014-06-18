var filter = require('./filter');
var pathname = process.argv[2];
var ext = process.argv[3];

filter(pathname, ext, function(err, filteredList){
	if (err)
		return console.log("There was an error.", err);
	filteredList.forEach(function(entry){
		console.log(entry);
	});
})