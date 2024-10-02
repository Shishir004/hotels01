const EventEmitter=require('events');
class MyEmitter extends EventEmitter{}
const myEmitter=new MyEmitter();
myEmitter.on('event',()=>{
    console.log('an event has occoured')
    setTimeout(()=>{
        console.log('an event2 has occoured')
    },[4000])
});
myEmitter.emit('event');
console.log('hello')