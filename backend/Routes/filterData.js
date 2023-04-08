const express=require('express');
const route=express.Router();
const mongoose=require("mongoose")
route.post('/filterData',async(req,res)=>{
    try {
        const collection = mongoose.connection.db.collection('filterItems');
        const filterItems = await collection.find({}).toArray();
        res.json(filterItems)
    } catch (error) {
        console.log("fail to fetch data MongoDB",error);
        res.status.json({ message: 'Failed to fetch data from MongoDB' })
    }
})
module.exports = route;     