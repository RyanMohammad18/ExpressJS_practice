const EventEmitter = require('events');
const emitter = new EventEmitter(); 

// register a listener for bellring event
emitter.on('bellring',({period,text})=>{
    console.log(`we need to run because ${period} ${text}` );
});

// raise an event

setTimeout(()=>{
    emitter.emit('bellring',{
        period: 'first',
        text: 'period ended',
    });
},2000);
