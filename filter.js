var fs = require('fs');
var path = require('path');
module.exports = function(pathname, ext, callback){
	var listWithExt = [];
	fs.readdir(pathname, function(err, list){
		if (err) 
			return callback(err);
		for(var i = 0; i < list.length; i++){
			if (path.extname(list[i]) == '.' + ext){
				listWithExt.push(list[i]);
			}
		}
		callback(null, listWithExt);
	});
}