const express=require("express");
const route=express.Router()
    
route.post("/cardData",(req,res)=>{
    res.send([global.foodItems,global.catData])
})

module.exports=route