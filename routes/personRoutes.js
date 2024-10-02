const express=require('express');
const route=express.Router();
const Person = require('../models/person');

// for post method
route.post('/',async(req, res) => {
    try {
        const data = req.body;
        const newPerson = new Person(data);
        const response=await newPerson.save()
        console.log('data saved');
        res.status(200).json(response);
    }
    catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
})

// for get method

route.get('/',async(req,res)=>{
    try{
        const data =await Person.find();
        console.log('data fetched');
        res.status(200).json(data);
    }
    catch(err){
        console.log(err);
        res.status(500).json(err);
    }
})

// parameterized get
route.get('/:workType', async (req, res) => {
    try {
        const workType = req.params.workType; // Extracting workType from request parameters
        
        // Check if workType is valid
        if (workType === "waiter" || workType === "chef" || workType === "manager") {
            const response = await Person.find({
                work: workType
            });

            console.log('We found the posts for your work type: ' + workType);
            res.status(200).json(response);
        } else {
            res.status(404).json("Invalid work type.");
        }
    } catch (error) {
        console.error("ERROR: ", error); // Log the error for debugging
        res.status(500).json({ error: 'Server error' });
    }
});

// now updating the data
route.put('/:id',async(req,res)=>{
    try{
        const id=req.params.id;
        const updatedData=req.body;
        const response=await Person.findByIdAndUpdate(id,updatedData,{
            new:true,
            runValidators:true
        })
        if(!response)
        {
            return res.status(404).json({
                error:"person not found"
            })
        }

        console.log('data updated')
        res.status(200).json(response)
    }
    catch(error){
        console.log('Error');
        res.status(500).json({
            error:"Internal server error"
        })
    }
})
//now deleting the data

route.delete('/:id',async(req,res)=>{
    try{
        const id=req.params.id;
        const response=await Person.findByIdAndDelete(id);
        if(!response)
        {
            res.status(400).json({error:'can not delete'})
        }
        res.status(200).json({ message: 'ID deleted successfully', data: response });
        console.log("id deleted suscessfully")
    }
    catch(error){
        res.status(500).json({error:'id cannot delete'});
        console.log(error);
    }
})

module.exports=route



