const express = require('express');
const dotenv=require('dotenv');
dotenv.config({path:'./config.env'})
const mongodb = require('./db');

const app = express()
const port = process.env.PORT
mongodb();


//middleware
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
app.use(express.json())

app.use('/new', require('./Routes/userRoute'))
app.use("/", require('./Routes/cardData'))
app.use('/', require('./Routes/filterData'))
app.use('/order', require('./Routes/orderRoute'));
app.listen(port, () => {
    console.log(`app listening on port ${port}`)
})
