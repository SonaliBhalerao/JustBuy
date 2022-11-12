const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { UserModel } = require('../Models/User.model');
const { checkUser } = require('../Middleware/authMiddleware');

const userRouter = express.Router();


//.......... Signup .........
userRouter.post("/signup", checkUser,  async(req, res)=>{
    const {name, contact, email, password} = req.body;
    
    await bcrypt.hash(password, 8, function(err, hash){
        if(err){
            return res.send("Sign up failed, Please try again later");
        }
        const user = new UserModel({name, contact, email, password:hash});
        user.save();
        console.log("Signup Successful!")
        return res.send("Signup Successful!");
    });
});

//.......... Login ............
userRouter.post("/login", async(req, res)=>{
    const {email, password} = req.body;
    const user = await UserModel.findOne({email});
    if(!user) return res.send("Invalid User Credentials, Please try again later");
    
    const hashed = user.password;
    await bcrypt.compare(password, hashed, function(err, result){
        if(err) res.send("Invalid User Credentials, Please try again later");

        if(result == true){
            const token = jwt.sign({email: user.email, _id : user._id}, process.env.jwt_secret_key);
            return res.send({message : "Login Successful", token: token, userId : user._id});
        }else{
            return res.send("Invalid User Credentials, Please try again later");
        }
    })
})

module.exports = { userRouter }