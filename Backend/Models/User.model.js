const mongoose = require("mongoose");


//........Schema for User Model........

const UserSchema = new mongoose.Schema({
    name: String,
    contact : Number,
    email: { type: String, require: true, unique: true},
    password : { type: String, require: true, unique: true}
}, 
{
    timestamps : true
});


const UserModel = mongoose.model("user", UserSchema);

module.exports = { UserModel }