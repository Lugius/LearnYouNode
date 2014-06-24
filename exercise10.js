var net = require('net');

function handleRequest(socket){
	var date = new Date();
	var dateStr = date.getFullYear() + '-' + 
				  ('0' + (date.getMonth()+1)).slice(-2) + "-" + 
				  ('0' + date.getDate()).slice(-2) + ' ' + 
				  ('0' + date.getHours()).slice(-2) + ':' + 
	              ('0' + date.getMinutes()).slice(-2) + '\n';
	socket.write(dateStr);
	socket.end();
}

var server = net.createServer(handleRequest);

server.listen(process.argv[2]);