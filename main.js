var http=require('http');

var url=require('url');

http.createServer(function(request,response){

	response.writeHead(200);
	response.write("Dog is Running");
	setInterval(function(){

		response.write("Dog is Done");
		//response.write(request.url); //get a part of request url
		
		var q=url.parse(request.url,true).query;

		response.write(q.name);

		response.end();
	},1000);
}).listen(8080);