const mongoose=require('mongoose');
const playerSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    category:{
        type:String,
        enum:['batsman','bowler','fielder'],
        required:true
    }
})
const Player=mongoose.model('Player',playerSchema)
module.exports=Player;