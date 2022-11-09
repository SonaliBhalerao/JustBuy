const express=require("express");
const { Connection } = require("./Config/db");
const { AllProducts } = require("./Routes/AllProducts.route");
require("dotenv").config();
const app=express();

//PORT 
const PORT=process.env.PORT || 8000;

app.use(express.json());

// END POINT FOR ALL PRODUCTS
app.use("/products",AllProducts);


// LISTENIGN PORT AND CONNECTING TO DATABASE
app.listen(PORT,async()=>{
   try{
    await Connection
    console.log("connection to DB successfull");
   }
   catch(err){
    console.log("error in connecting to db");
    console.log(err);
   }
    console.log(`listening to Port ${PORT}`)
})