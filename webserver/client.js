
var http = require('http');
 
// 请求选项
var options = {
   host: 'localhost',
   port: '8888',
   path: '/index.html'  
};
 
var callback = function(response){
   var body = '';
   response.on('data', function(data) {
      body += data;
   });
   
   response.on('end', function() {
      console.log(body);
   });
}
// 发送请求
var req = http.request(options, callback);
req.end();

