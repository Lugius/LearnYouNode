var http = require('http');
var bl = require('bl');

http.get(process.argv[2], function(response){
	response.pipe(bl(function(err, data){
		if(err)
			return console.error("There was an error", err);
		console.log(data.length);
		console.log(data.toString());
	}))
})