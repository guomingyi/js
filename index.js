
var server = require("./server");
var router = require("./router");
 
server.start(router.route);

/*
$ node index.js 
Server has started: http://127.0.0.1:8888/
Request for / received.
About to route a request for /
Request for /favicon.ico received.
About to route a request for /favicon.ico
*/
