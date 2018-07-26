// add module.
var hello = require('./hello'); 
var server = require('./server'); 
var event = require('./event');
var async = require('./async');

function buffer_test() {
	const buf = Buffer.from('abcd', 'ascii');
	console.log(buf.toString());
	console.log(buf.toString('hex'));
	console.log(buf.toString('base64'));
}


// call external function.
hello.hello()

buffer_test()

event.emit_event()

async.async_read()

server.http_server() 







