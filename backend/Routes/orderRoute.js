const express = require('express');
const crypto = require('crypto')
const router = express.Router();
const Order = require('../model/orderModel')
// const{body,validationResult}=require('express-validator')
const Razorpay = require('razorpay');
const KEY_ID = process.env.KEY_ID;
const SECRET_KEY = process.env.SECRET_KEY;
router.use(express.json());
router.post('/order-create', async (req, res) => {
    const amount = parseInt(req.body.amount) * 100;
    
    var instance = new Razorpay({
        key_id: KEY_ID,
        key_secret: SECRET_KEY,
    })
    var options = {
        amount: amount,
        currency: "INR",
        receipt: "order_rcptid_11"
    }
    try {
        const order = await instance.orders.create(options)
        res.json(order)
    }
    catch (error) {
        console.log(error);
    }
})
router.post('/verify', async (req, res) => {
    try {
        const { razorpay_payment_id, razorpay_order_id, razorpay_signature } = req.body.razorpay
        const { address, itemsOrdered, accountEmail } = req.body.orderData;

        const sign = razorpay_order_id + "|" + razorpay_payment_id;
        const expectedSign = crypto
            .createHmac("sha256", SECRET_KEY)
            .update(sign.toString())
            .digest("hex");
        if (razorpay_signature === expectedSign) {
            
            
            await Order.create({  address: address, itemsOrdered: itemsOrdered, accountEmail: accountEmail })
            res.status(200).json({
                "success": true,
                "message": "Payment Verified Successfully"
            })
        }
        else {
            res.status(400).json({
                "success": false,
                "message": "Invalid Signature sent!"
            })
        }
    } catch (error) {
        res.status(404).json({ message: "internal server error" })
    }
})
router.post('/order-data',async(req,res)=>{
   try {
    //    console.log('accountEmail:req.body.accountEmail===', req.body.accountEmail)
       const orders = await Order.find({ accountEmail: req.body.accountEmail });
       if (orders) {
        res.json(orders)
       }
   } catch (error) {
        res.status(400).json({message:error})
   }
})
module.exports = router;