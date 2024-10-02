const mongoose=require('mongoose');
const personSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:String,
        required:true
    },
    work:{
        type:String,
        enum:['waiter','chef','manager']
    },
    gender:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    address:{
        type:String,
        required:true
    }
})
const Person=mongoose.model('Person',personSchema);
module.exports=Person;