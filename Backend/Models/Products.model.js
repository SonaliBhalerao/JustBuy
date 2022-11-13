const mongoose=require("mongoose");

// SCHEMA FOR MENS DOCUMENTS
const MenSchema= new mongoose.Schema({
    productImg:String,
    category:String,
    rating: String,
    description:String,
    finalprice:String,
    strickprice:String,
    tribeprice:String,
    seller:String
})
// MEN MODEL
const ProductModelMen= mongoose.model("men",MenSchema);


// SCHEMA FOR WOMENS DOCUMENTS
const WomenSchema=new mongoose.Schema({ 
    productImg:String,
    description:String,
    finalprice:String,
    strickprice:String,
    tribeprice:String,
    category:String,
    rating:String,
    seller:String
})
// WOMEN MODEL
const ProductModelWomen=mongoose.model("women",WomenSchema);


const CartSchema =new mongoose.Schema({
    productImg:String,
    category:String,
    rating:String,
    description:String,
    finalprice:String,
    strickprice:String,
    tribeprice:String,
    seller:String,
    size:String,
    qty:String,
    user_id:String
})
const CartModel=mongoose.model("cartitem",CartSchema);

module.exports={ProductModelWomen,ProductModelMen,CartModel};