
var express = require('express');
var app = express();
 
app.use(express.static('public')); //http://127.0.0.1:8080/images/logo.png


// GET 
app.get('/', function (req, res) {
   console.log("主页 GET 请求.");
   res.send('Hello world');
})
 
 
// POST 
app.post('/', function (req, res) {
   console.log("主页 POST 请求");
   res.send('Hello POST');
})

// GET 
app.get('/del_user', function (req, res) {
   console.log("/del_user 响应 DELETE 请求");
   res.send('删除页面');
})
 
// GET 
app.get('/list_user', function (req, res) {
   console.log("/list_user GET 请求");
   res.send('用户列表页面');
})
 
// GET 
app.get('/ab*cd', function(req, res) {   
   console.log("/ab*cd GET 请求");
   res.send('正则匹配');
})
 
 
var server = app.listen(8080, function () {
 
  var host = server.address().address
  var port = server.address().port
  console.log("浏览器输入: http://127.0.0.1:8080")

})

