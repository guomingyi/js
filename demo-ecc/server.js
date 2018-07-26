
// chrome://inspect/#devices
// node --inspect server.js

var express = require('express');
var app = express();
var fs = require("fs");
var ecc_test = require('./demo_ecc_test');
 
var bodyParser = require('body-parser');
var multer  = require('multer');
 
app.use(bodyParser.urlencoded({ extended: false }));
 
app.post('/demo-ecc', function (req, res) {
 
   console.log("app post")
   ecc_test.test()
   
})
 
var server = app.listen(8080, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("访问地址: http://127.0.0.1:8080/demo-ecc/index.html")
 
})




