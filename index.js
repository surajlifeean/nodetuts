var http=require('http');

var fs=require('fs');

var url=require('url');

http.createServer(function(req,res){


	var q=url.parse(req.url,true);

	var filename=q.pathname+".html";

	var filename = filename.substr(1);

	fs.readFile(filename,function(err,data){

		console.log(filename);
		if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end("404 Not Found");
    }  
		
		res.writeHead(200,{'Content-Type': 'text/html'});

		res.write(data);

		res.end();

	});



}).listen(8080);