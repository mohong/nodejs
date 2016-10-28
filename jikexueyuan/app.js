var http = require('http');
http.createServer(function(req,res){
	console.log('req.baseUrl '+req.baseUrl);
	console.log('req.path '+req.path);
	res.end('hello');
}).listen(8011);