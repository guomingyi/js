
/**************************** Global **************************/
console.log( __filename );
console.log( __dirname );


/**************************** Timer **************************/
function printHello(){
   console.log( "Hello, World!");
}

// start timer, setTimeout only run 1 times
var t = setTimeout(printHello, 2000);
//clearTimeout(t);


// repeat run.
//var t1 = setInterval(printHello, 2000);
//clearInterval(t1)

/**************************** call stack **************************/
console.trace("this is code trace:")


/**************************** process **************************/
process.on('exit', function(code) { // call this func while process exit.
  console.log('退出码为:', code);
});
console.log("程序执行结束");




