const mongoose = require('mongoose');
const connectionURL = process.env.CONNECTION_URL;
const mongodb = async () => {
    await mongoose.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true })
}

const db = mongoose.connection
db.on('error', console.error.bind(console, 'error connection :'))
db.once('open', function () {
    console.log("connection established")
    /* 
            mongoose.model('fetchData',{},'foodItems').find({}).then(data=>
            { 
                global.foodItems=data
                mongoose.model('fetchCategory',{},"Category").find({}).then((catData)=>{
                    global.catData=catData
                    mongoose.model('fetchFilter',{},"filterItems").find({}).then((filterItem)=>{
                        global.filterItems=filterItem;
                    
                    })
                })
            }) */
})
module.exports = mongodb  