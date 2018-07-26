
var hello = require('./hello'); 

function buffer_test() {
	const buf = Buffer.from('abcd', 'ascii');
	console.log(buf.toString());
	console.log(buf.toString('hex'));
	console.log(buf.toString('base64'));
}


hello.hello()

buffer_test()








