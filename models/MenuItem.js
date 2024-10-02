const mongoose=require('mongoose');
const menuItemSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    taste:{
        type:String,
        enum:['sweet','spicy','sour'],
        required:true
    },
    isDrink:{
        type:Boolean,
        default:false,
    },
    ingredients:{
        type:[String],
        default:[]
    },
    num_sales:{
        type:Number,
        default:0,
    }
})
// coment add
const MenuItems=mongoose.model('MenuItem',menuItemSchema);
module.exports=MenuItems;


