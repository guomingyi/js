var http = require('http');
var url = require("url");
var util = require('util');
 
function start(route) {
  function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " received.");
    route(pathname);
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello World\n");

    // 解析 url 参数
    var params = url.parse(request.url, true).query;
    response.write("网站名：" + params.name);
    response.write("\n");
    response.write("网站 URL：" + params.url);
    response.write(util.inspect(url.parse(request.url,true)));
    response.end()
  }
 
  http.createServer(onRequest).listen(8888);
  console.log("Server has started: http://127.0.0.1:8888/");
}
 
exports.start = start;







