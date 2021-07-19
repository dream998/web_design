const http = require('http')
const fs = require('fs')
var url = require("url");
http.createServer((request, response) => {
	console.log(url.parse(request.url).pathname);
	let pathname = url.parse(request.url).pathname;

	if (pathname == 'index' || pathname == '/') {

		fs.readFile('./index.html', (err, data) => {
			if (err) {
				response.write(err)
				response.end()
				return
			}
			response.writeHead(200, {
				'ContentType': 'text/html'
			})
			response.write(data)
			response.end()

		})
		


	}
	if (pathname == '/image') {
		
		fs.readFile('./pic_2.jpg', (err, data) => {
			if (err) {
				response.write(err)
				response.end()
				return
			}
			response.writeHead(200, {
				'ContentType': 'image'
			})
			response.write(data)
			response.end()
		
		})
		
		
	}
	if (pathname == '/js') {
		
		fs.readFile('./server.js', (err, data) => {
			if (err) {
				response.write(err)
				response.end()
				return
			}
			response.writeHead(200, {
				'ContentType': 'image'
			})
			response.write(data)
			response.end()
		
		})
		
		
	}
}).listen(8080)
console.log("Server has started.");
