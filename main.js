
var hello = require('./hello'); 
var server = require('./server'); // add external module require.

function buffer_test() {
	const buf = Buffer.from('abcd', 'ascii');
	console.log(buf.toString());
	console.log(buf.toString('hex'));
	console.log(buf.toString('base64'));
}


hello.hello()

buffer_test()

server.http_server() // call external function.







