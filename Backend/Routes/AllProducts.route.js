const { Router } = require("express");
const { ProductModelMen, ProductModelWomen } = require("../Models/Products.model");

const AllProducts=Router();

// ALL PRODUCTS FOR MENS
AllProducts.get("/men",async(req,res)=>{
    let {category, finalprice, seller, rating, page, limit} = req.query; 
    finalprice = Number(finalprice);
    rating=Number(rating)
    console.log(rating)
    const Mens=await ProductModelMen.find({$or :[{},{category:category}]}).limit(limit).skip((page-1)*limit);  
    console.log(category)
    res.send(Mens); 
});

// SORT BY ASC BY PRICE MENS
AllProducts.get("/men_asc",async(req,res)=>{
    let {category, finalprice, seller, rating, page, limit} = req.query; 
    finalprice = Number(finalprice)
    const Mens=await ProductModelMen.find({}).sort({finalprice: 1}); 
    res.send(Mens); 
});

// SORT BY DSC BY PRICE MENS
AllProducts.get("/men_dsc",async(req,res)=>{
    let {category, finalprice, seller, rating, page, limit} = req.query; 
    finalprice = Number(finalprice)
    const Mens=await ProductModelMen.find({}).sort({finalprice: -1}); 
    res.send(Mens); 
});

// SINGLE PRODUCTS FOR MEN
AllProducts.get("/men/:productid",async(req,res)=>{
    const payload=req.params.productid;
    const singledata=await ProductModelMen.findOne({_id:payload});
    res.send(singledata)
});


// ALL PRODUCTS FOR WOMEN
AllProducts.get("/women",async(req,res)=>{
    let {category, finalprice, seller, rating, page, limit} = req.query; 
    finalprice = Number(finalprice)
    const Women=await ProductModelWomen.find({$or :[{},{category:category}]}).limit(limit).skip((page-1)*limit);   
    res.send(Women); 
});

// SORT BY ASC BY PRICE WOMEN
AllProducts.get("/women_asc",async(req,res)=>{
    let {category, finalprice, seller, rating, page, limit} = req.query; 
    finalprice = Number(finalprice)
    const Women=await ProductModelWomen.find({}).sort({finalprice: 1}); 
    res.send(Women); 
});

// SORT BY DSC BY PRICE WOMEN
AllProducts.get("/women_dsc",async(req,res)=>{
    let {category, finalprice, seller, rating, page, limit} = req.query; 
    finalprice = Number(finalprice)
    const Women=await ProductModelWomen.find({}).sort({finalprice: -1}); 
    res.send(Women); 
});


// SINGLE PRODUCT FOR WOMEN
AllProducts.get("/women/:productid",async(req,res)=>{
    const payload=req.params.productid;
    const singledata=await ProductModelWomen.findOne({_id:payload});
    res.send(singledata)
})

// ADD A PRODUCT IN MENS COLLECTION
AllProducts.post("/men",async(req,res)=>{
    const {col_sm_4href,productImgTagsrc,plp,clr_shade4,wishlist_icon_animatesrc,actualPriceText,loyaltyPriceBox2,clr_shade_3}=req.body;
   const newMens= new ProductModelMen({
    col_sm_4href:col_sm_4href,
    productImgTagsrc:productImgTagsrc,
    plp:plp,
    clr_shade4:clr_shade4,
    wishlist_icon_animatesrc:wishlist_icon_animatesrc,
    actualPriceText:actualPriceText,
    loyaltyPriceBox2:loyaltyPriceBox2,
    clr_shade_3:clr_shade_3 })
   await newMens.save();
   console.log(newMens);
   res.send("todo added successfull");
})


// ADD A PRODUCT IN WOMENS COLLECTION
AllProducts.post("/women",async(req,res)=>{
    const {col_sm_4href,productImgTagsrc,plp,clr_shade_3,clr_shade4,wishlist_icon_animate_src,discountedPriceText,actualPriceText,loyaltyPriceBox2,d_flex}=req.body;
   const newWomen= new ProductModelWomen({
    col_sm_4href:col_sm_4href,
    productImgTagsrc:productImgTagsrc,
    plp:plp,
    clr_shade_3:clr_shade_3,
    clr_shade4:clr_shade4,
    wishlist_icon_animate_src:wishlist_icon_animate_src,
    discountedPriceText:discountedPriceText,
    actualPriceText:actualPriceText,
    loyaltyPriceBox2:loyaltyPriceBox2,
    d_flex:d_flex  })
   await newWomen.save();
   console.log(newWomen);
   res.send("todo added successfull");
})

// DELETE A PORDUCT IN MENS COLLENTION
AllProducts.delete("/men/:productid",async(req,res)=>{
    const payload=req.params.productid;
    await ProductModelMen.deleteMany({_id:payload});
    res.send("Deleted successfully");
})

// DELETE A PRODUCT IN WOMENS COLLECTION
AllProducts.delete("/women/:productid",async(req,res)=>{
    const payload=req.params.productid;
    await ProductModelWomen.deleteMany({_id:payload});
    res.send("Deleted successfully");
})


module.exports={AllProducts};