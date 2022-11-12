const {Router} = require("express")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
require("dotenv").config()


const {AdminModel} = require("../Models/Admin.model")
const {authentication} = require("../Middleware/authentication")
const {validatorLogin} = require("../Middleware/validatorLogin")
const {validator} = require("../Middleware/validator")
const { ProductModelMen, ProductModelWomen, CartModel } = require("../Models/Products.model");

const adminController = Router()


adminController.post("/signup",validator, (req,res) => {
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



adminController.post("/login", validatorLogin , async(req,res) => {
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

adminController.use(authentication)

adminController.patch("/edit/men/:noteId", async (req, res) => {
    const {noteId} = req.params
    const deleted = await ProductModelMen.findByIdAndUpdate(noteId,req.body)
    console.log(deleted)
    if(deleted){ 
        res.json({msg:"successfully patched"})
    }
    else{
        res.json({msg:"failure"})
    }
})

adminController.patch("/edit/women/:noteId", async (req, res) => {
    const {noteId} = req.params
    const deleted = await ProductModelWomen.findByIdAndUpdate(noteId,req.body)
    if(deleted){
        res.json({msg:"successfully patched"})
    }
    else{
        res.json({msg:"failure"})
    }
})

adminController.delete("/delete/:noteId", async (req, res) => {
    const {noteId} = req.params
    const deletedNote = await ProductModelMen.findOneAndDelete({_id : noteId, userId : req.body.userId})
    if(deletedNote){
        res.status(200).send("Deleted")
    }
    else{
        res.send("couldn't delete")
    }
})
adminController.delete("/delete/:noteId", async (req, res) => {
    const {noteId} = req.params
    const deletedNote = await ProductModelWomen.findOneAndDelete({_id : noteId, userId : req.body.userId})
    if(deletedNote){
        res.status(200).send("Deleted")
    }
    else{
        res.send("couldn't delete")
    }
})


module.exports ={
    adminController 
}