const mongoose =require('mongoose')
const orderScheme=new mongoose.Schema({
    orderDate:{type:Date,default:Date()},
    address:{type:String},
    itemsOrdered:{
        type: mongoose.Schema.Types.Mixed
    },
    accountEmail:{type:String}
})
const Order=mongoose.model('orders',orderScheme);
module.exports=Order;

 