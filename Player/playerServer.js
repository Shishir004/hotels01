const Player=require('./playerSchema')
const db=require('./playerdb');

const express=require('express');
const app=express();
const port=4006;

const bodyParser=require('body-parser')
app.use(bodyParser.json())

app.post('/players',async(req,res)=>{
    try{
        const data=req.body;
        const newPlayer= new Player(data);
        const response =await newPlayer.save()
        res.status(200).json(response);
        console.log("Data saved Suscessfully");
    }catch(error){
        res.status(400).json(error)
        console.log(error);
    }
})

app.listen(port,()=>{
    console.log('app is listening on port'+port)
})