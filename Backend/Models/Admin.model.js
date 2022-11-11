const mongoose =require("mongoose")

const adminSchema = mongoose.Schema({
    email: {type :String ,required:true},
    password: {type :String ,required:true},
    type:{type :String , default:"admin"}
})
 
const AdminModel = mongoose.model("admin" , adminSchema)

module.exports = { 
    AdminModel
}