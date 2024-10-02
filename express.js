const express=require('express');
const app=express();
const port=3000;
app.get('/',(req,res)=>{
    res.send('hello my name is shishir tiwari and i am in swami rama himalayan university')
})
app.get('/home',(req,res)=>{
    res.send('this is my home')
})
app.get('/about',(req,res)=>{
    res.send('this is about us')
})
app.listen(port,()=>{
    console.log('app is listening on port http://localhost:'+port);
})
