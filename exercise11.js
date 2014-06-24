var http = require('http');
var fs = require('fs');

function callback (req, res){
	res.writeHead(200, {'content-type': 'text/plain'})
	var fileStream = fs.createReadStream(process.argv[3]);
	fileStream.pipe(res);
}

var server = http.createServer(callback);
server.listen(process.argv[2]);