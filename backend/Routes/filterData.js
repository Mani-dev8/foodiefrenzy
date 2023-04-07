const express=require('express');
const route=express.Router();
route.post('/filterData',(req,res)=>{
    res.send([global.filterItems])
})
module.exports = route;     