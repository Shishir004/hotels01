const MenuItem = require('../models/MenuItem');
const express=require('express');
const route=express.Router();

route.post('/', async (req, res) => {
    try {
        const data = req.body;
        const newMenu = new MenuItem(data);
        const response = await newMenu.save();
        console.log('data saved')
        res.status(200).json(response);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error saving menu data', error });
    }
});

route.get('/',async(req,res)=>{
    try{
        const data=await MenuItem.find();
        console.log('data fetched');
        res.status(200).json(data)
    }
    catch(err){
        console.log(err);
        res.status(500).json({err:'server error'})
    }
})
route.put('/:id',async(req,res)=>{
    try{
        const id=req.params.id;
        const Menu_data=req.body;
        const response=await MenuItem.findByIdAndUpdate(id,Menu_data,{
            new:true,
            runValidators:true
        })
        if(!response)
        {

            res.status(404).json({
                error:'Menu not found'
            })
        }
        console.log('data updated !!!Sucesfully')
        res.status(200).json(response);
    }
    catch(error){
        console.log("ERORRRRRRRR")
        res.status(500).json({error:'error'})
    }
})


// now using parameterized url
route.get('/:tasteType',async(req,res)=>{
    try{
        const tasteType=req.params.tasteType;
        if(tasteType=="sweet"||taste=="sour"||taste=="spicy")
        {
            const response=await MenuItem.find({
                taste:tasteType
            })
            res.status(200).json(response);
        }
        else{
            console.log("ERROR")
        }
    }
    catch(error){
        res.status(404).json({error:'server error'})
        console.log("error")
    }
})

// now deleting the id
route.delete('/:id',async(req,res)=>{
    try{
        const id=req.params.id;
        const response=await MenuItem.findByIdAndDelete(id);
        if(!response)
        {
            console.log('errorrrr')
            res.status(404).json({error:"cannot update the id"})
        }
        res.status(200).json({message:"updated suscessfully",data:response})
    }
    catch(error){
        res.status(500).json({error:"Inter server error"})
    }
})
module.exports=route;