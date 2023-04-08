const express=require("express");
const route=express.Router()
    
route.post("/cardData",(req,res)=>{
    res.json([global.foodItems,global.catData])
})

module.exports=route