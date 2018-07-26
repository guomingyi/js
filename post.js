/*
GET请求直接被嵌入在路径中，URL是完整的请求路径,而POST请求的内容全部的都在请求体中，需要手动解析
*/


var http = require('http');
var querystring = require('querystring');
 
var postHTML = 
  '<html><head><meta charset="utf-8"><title>Node.js</title></head>' +
  '<body>' +
  '<form method="post">' +
  '网站名： <input name="name"><br>' +
  '网站 URL： <input name="url"><br>' +
  '<input type="submit">' +
  '</form>' +
  '</body></html>';
 
http.createServer(function (req, res) {
  var body = "";
  req.on('data', function (chunk) {
    body += chunk;
    console.log(chunk)
  });
  req.on('end', function () {
    body = querystring.parse(body);
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf8'});
 
    if(body.name && body.url) {
        console.log(body.name)
        console.log(body.url)
        res.write("网站名：" + body.name);
        res.write("<br>");
        res.write("网站 URL：" + body.url);
    } else {
        console.log(postHTML)
        res.write(postHTML);
    }
    res.end();
  });
}).listen(8888);

console.log("server start..")

