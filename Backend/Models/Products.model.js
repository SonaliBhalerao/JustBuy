const mongoose=require("mongoose");

// SCHEMA FOR MENS DOCUMENTS
const MenSchema= new mongoose.Schema({
    col_sm_4href:String,
    productImgTagsrc:String,
    plp:String, 
    clr_shade4:String,
    wishlist_icon_animatesrc:String,
    actualPriceText:String,
    loyaltyPriceBox2:String,
    clr_shade_3:String
})
// MEN MODEL
const ProductModelMen= mongoose.model("men",MenSchema);


// SCHEMA FOR WOMENS DOCUMENTS
const WomenSchema=new mongoose.Schema({ 
    col_sm_4href:String,
    productImgTagsrc:String,
    plp:String,
    clr_shade_3:String,
    clr_shade4:String,
    wishlist_icon_animate_src:String,
    discountedPriceText:String,
    actualPriceText:String,
    loyaltyPriceBox2:String,
    d_flex:String
})
// WOMEN MODEL
const ProductModelWomen=mongoose.model("women",WomenSchema);

module.exports={ProductModelWomen,ProductModelMen};