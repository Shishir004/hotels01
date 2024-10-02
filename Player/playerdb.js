const mongoose=require('mongoose');
const URL='mongodb://127.0.0.1:27017/players';

mongoose.connect(URL);
const db=mongoose.connection;



db.on('connected',()=>{
    console.log('connected suscessfully')
})

db.on('error',()=>{
    console.log('There is some error')
})
db.on('disconnected',()=>{
    console.log("error");
})

module.exports=db;