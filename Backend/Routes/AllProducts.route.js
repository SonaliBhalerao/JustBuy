const { Router } = require("express");
const { ProductModelMen, ProductModelWomen, CartModel } = require("../Models/Products.model");

const AllProducts=Router();

// ALL PRODUCTS FOR MENS
AllProducts.get("/men",async(req,res)=>{
    const Mens=await ProductModelMen.find({});
    console.log(Mens);
    res.send(Mens);
})

// SINGLE PRODUCTS FOR MEN
AllProducts.get("/men/:productid",async(req,res)=>{
    const payload=req.params.productid;
    const singledata=await ProductModelMen.findOne({_id:payload});
    res.send(singledata)
})

// ALL PRODUCTS FOR WOMEN
AllProducts.get("/women",async(req,res)=>{
    const Womens=await ProductModelWomen.find({});
    console.log(Womens);
    res.send(Womens);
})


// SINGLE PRODUCT FOR WOMEN
AllProducts.get("/women/:productid",async(req,res)=>{
    const payload=req.params.productid;
    const singledata=await ProductModelWomen.findOne({_id:payload});
    res.send(singledata)
})

// GETTING ALL ITEMS IN CART WITH REFERENCE TO USER_ID
AllProducts.get("/cart",async(req,res)=>{
    const payload= "12341235"; // req.user_id;
  const CartItems= await CartModel.find({user_id:payload});
  console.log(CartItems);
  res.send(CartItems);
})

// ADD A PRODUCT IN MENS COLLECTION
AllProducts.post("/men",async(req,res)=>{
    const {productImg,category,rating,description,finalprice,strickprice,tribeprice,seller}=req.body;
   const newMens= new ProductModelMen({
    productImg:productImg,
    category:category,
    rating:rating,
    description:description,
    finalprice: finalprice,
    strickprice:strickprice,
    tribeprice:tribeprice,
    seller: seller  })
   await newMens.save();
   console.log(newMens);
   res.send("todo added successfull");
})


// ADD A PRODUCT IN WOMENS COLLECTION
AllProducts.post("/women",async(req,res)=>{
    const {productImg,description,finalprice,strickprice,tribeprice,category,rating,seller}=req.body;
    const newWomen= new ProductModelWomen({
     productImg:productImg,
     description:description,
     finalprice: finalprice,
     strickprice:strickprice,
     tribeprice:tribeprice,
     category:category,
     rating:rating,
     seller: seller })
   await newWomen.save();
   console.log(newWomen);
   res.send("todo added successfull");
})

// ADDING ITEMS TO CART WITH REFERENCE TO USER_ID
AllProducts.post("/cart", async(req,res)=>{
    const {productImg,description,finalprice,strickprice,tribeprice,category,rating,seller,user_id}=req.body;
    console.log(description,finalprice,user_id)
    const AlreadyPresent= await CartModel.findOne({user_id:user_id,description:description})
    if(AlreadyPresent){
        res.send("Product already in the cart");
    }
    else{
    const cartItem= new CartModel({
     productImg:productImg,
     description:description,
     finalprice: finalprice,
     strickprice:strickprice,
     tribeprice:tribeprice,
     category:category,
     rating:rating,
     seller: seller,
    user_id:user_id })
   await cartItem.save();
   console.log(cartItem);
   res.send("todo added successfull");
    }
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

// DELETE ALL ITEMS IN CART WITH RESPECT TO USER_ID WHEN ORDER PLACED
AllProducts.delete("/cart",async(req,res)=>{
    const payload="12341234"; // req.user_id;
     const mydelete=await CartModel.deleteMany({user_id:payload})
    res.send(mydelete)
})

// DELETE SINGLE ITEMS WITH RESPECT USER_ID IF THE USRE REMOVES IT FROM CART
AllProducts.delete("/cart/:deleteid",async(req,res)=>{
    const payload=req.params.deleteid;
    const payload1=12341235; //req.user_id
     const mydelete= await CartModel.deleteMany({_id:payload,user_id:payload1});
     res.send(mydelete);
})
module.exports={AllProducts};