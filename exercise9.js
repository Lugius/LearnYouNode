var http = require('http');
var bl = require('bl');

var urls = process.argv.slice(2);
var count = 0;
var dataArr = [];

urls.forEach(function(url, index){
	http.get(url, function(response){
		response.pipe(bl(function(err, data){
			if(err)
				return console.error("There was an error", err);
			dataArr[index] = data.toString();
			count++;
			if(count == 3) {
				dataArr.forEach(function(data){
					console.log(data);
				});
			}
		}));
	});
});
