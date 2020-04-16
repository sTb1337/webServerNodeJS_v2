var http = require('http');

http.createServer(function(req, res){
    res.end("Hello World version 2")
}).listen(8888);