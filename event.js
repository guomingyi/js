
var events = require('events');

var eventEmitter = new events.EventEmitter();

var connectHandler = function connected() {
   console.log('connected success.. trigger data receiver.');
   eventEmitter.emit('data_received');
}

eventEmitter.on('connection', connectHandler);

eventEmitter.on('data_received', function(){
   console.log('data_received success');
});


function emit_event() {
    console.log('emit connection..');
    eventEmitter.emit('connection');
}

exports.emit_event = emit_event;




