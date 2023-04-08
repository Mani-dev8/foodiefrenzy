const express = require('express');
const dotenv=require('dotenv');
dotenv.config({path:'./.env'})
const mongodb = require('./db');

const app = express()
const port = process.env.PORT
mongodb();


//middleware
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
app.use(express.json())

app.use('/api/new', require('./Routes/userRoute'))
app.use("/api/", require('./Routes/cardData'))
app.use('/api/', require('./Routes/filterData'))
app.use('/api/order', require('./Routes/orderRoute'));
app.listen(port, () => {
    console.log(`app listening on port ${port}`)
})
