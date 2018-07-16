var http = require('http');

var handleRequest = function(request, response) {
  http.get("http://localhost:8080", (res) => {
    let { statusCode } = res;
    if (statusCode !== 200) {
      response.writeHead(500);
      response.end("Internal error\n");
    } else {
      response.writeHead(200);
      response.end('Hello World from server2');
    }
  }).on("error", (err) => {
    response.writeHead(500);
    response.end(err.message);
  });
};

var www = http.createServer(handleRequest);

www.listen(8081);
