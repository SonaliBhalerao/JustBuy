const {Router} = require("express")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
require("dotenv").config()


const {AdminModel} = require("../Models/Admin.model")
const {authentication} = require("../Middleware/authentication")

 
const adminController = Router()

adminController.post("/signup", (req,res) => {
    const {email,password} = req.body
    // console.log("first",email,password)
    // res.send("done")
    bcrypt.hash(password,5, async function (err,hash) {
        if(err) {
            res.json({msg:"something went wrong , Plz try again later"})
        } 
        const admin = AdminModel ({
            email,
            password:hash  
        })
        // console.log(user) 
        try {
            
            await admin.save()
            res.json({msg:"Signup Successfull"}) 
        }
        catch(err) {
            console.log(err)
            res.json({msg:"something went wrong"})
        } 
    });
})

adminController.post("/login", async(req,res) => {
    const {email,password} = req.body
    const user = await AdminModel.findOne({email})
    const hash = user.password

    bcrypt.compare(password, hash, function(err, result) {
        if(err) {
            res.json({msg:"something went wrong , Plz try again later"})
        }
        if(result) {
            const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
            res.json({msg:"Login Successfull" , token})
        } 
        else {
            res.json({msg:"Invalid Credentials"})
        } 
    });
}) 
module.exports ={
    adminController 
}