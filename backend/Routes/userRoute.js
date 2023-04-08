const express=require('express')
const routes=express.Router();
const {body,validationResult}=require('express-validator')
const User=require('../model/usersModel');
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')
const jwtSecret="HiMyNameIsManishMahtoLoveCoding"
routes.post('/insertuser',body('name').isString(),body('email').isEmail(),body('password').isLength({min:5}),async (req,res)=>{
    const errors=validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({error:errors.array()});
    }
    const salt=await bcrypt.genSalt(10)
    const securePass= await bcrypt.hash(req.body.password,salt)
    try { 
        await User.create({
            fullName:req.body.name,
            email:req.body.email,
            password:securePass
        }).then(user=>{
            const data={
                user:{
                    id: user.id
                }
            }
            const authToken=jwt.sign(data,jwtSecret)
            res.json({success:true,authToken:authToken});
        });
    } catch (error) {
        console.log(error);
        res.json({success:false,message:error});
    }
})

routes.post('/signin',async (req,res)=>{
    const email = req.body.email
    console.log(req.url)
    const password=req.body.password
    try {
        console.log(email)
        const userData= await User.findOne({email});
        console.log('typeof userData', userData)
        if(userData!==null){
            const comparePass =await bcrypt.compare(password,userData.password)
            if (comparePass) {
                const data = {
                    user: {
                        id: userData.id
                    }
                }
                const authToken = jwt.sign(data.user, jwtSecret);
                res.json({ message: true, authToken: authToken, userFullName: userData.fullName });
            }
            else {
                res.json({ message: "user not present" });
            }
        }
        else{
            res.json({message:"no account"})
            console.log('null', null)
        }
    } catch (error) {
        res.status(401);
    }
})

module.exports=routes