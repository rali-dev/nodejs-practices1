const EventEmitter = require('events');
const emitter = new EventEmitter();

// emitter.on('bell', () => {
//     console.log('Open the door!');
// });

// emitter.emit('bell');

emitter.on('bell', (e) => {
    console.log('Open the door!');
    console.log(`Bell rang at ${e.time} - ${e.count} - times`);
});

emitter.emit('bell', {time: Date.now(), count:2});