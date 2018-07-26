var fs = require("fs");


function async_read() {
	fs.readFile('input.txt', function (err, data) {
	   if (err){
		  console.log(err.stack);
		  return;
	   }
	   console.log(data.toString());
	});
}
console.log("async exec...");


exports.async_read = async_read;

