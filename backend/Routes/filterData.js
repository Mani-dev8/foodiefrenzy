const express=require('express');
const routes=express.Router();
const mongoose=require("mongoose")
const fetchFilterModel = mongoose.model('fetchFilter', {}, 'filterItems')
routes.post('/filterData',async(req,res)=>{
    try {
        const filterItems = await fetchFilterModel.find({});
        res.json(filterItems)
    } catch (error) {
        console.log("fail to fetch data MongoDB",error);
        res.status(400).json({ message: 'Failed to fetch data from MongoDB' })
    }
})
module.exports = routes;       