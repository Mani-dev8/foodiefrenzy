const express = require('express');
const dotenv=require('dotenv');
dotenv.config({path:'./.env'})
const mongodb = require('./db');
const mongoose = require("mongoose")
const app = express()
mongodb();
const port = process.env.PORT
const fetchFoodItemModel = mongoose.model('fetchData', {},'foodItems');
const fetchCategoryModel=mongoose.model('fetchCategory',{},'Category');
const fetchFilterModel = mongoose.model('fetchFilter', {}, 'filterItems');
//middleware
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
app.use(express.json())
app.get("/",(req,res)=>{
    res.send("welcome to foodiefrenzy")
})
app.use('/api/new', require('./Routes/userRoute'))
app.post("/api/cardData", async (req,res)=>{
    try {
        const foodItems = await fetchFoodItemModel.find({});
        const foodCategory = await fetchCategoryModel.find({});
        res.status(200).send([foodItems,foodCategory])
    } catch (error) {
        console.log("unable to find data from mongoDB ~~~~ ",error);
        res.status(400).json({message:"Fialed to fetch data from MongoDB"});
    }
})
app.post('/api/filterData', async (req,res)=>{
    try {
        const filterItems = await fetchFilterModel.find({});
        res.json(filterItems)
    } catch (error) {
        console.log("fail to fetch data MongoDB", error);
        res.status(400).json({ message: 'Failed to fetch data from MongoDB' })
    }
})
app.use('/api/order', require('./Routes/orderRoute'));
app.listen(port, () => {
    console.log(`app listening on port ${port}`)
})
