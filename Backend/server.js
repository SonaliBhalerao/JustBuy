const express=require("express");
const cors = require('cors');

const { Connection } = require("./Config/db");
const { AllProducts } = require("./Routes/AllProducts.route");
const { adminController } = require("./Routes/Admin.routes");
const { userRouter } = require("./Routes/User.route");
const { auth } = require('./Middleware/authMiddleware');
require("dotenv").config();
const app=express();
app.use(cors());

//PORT 
const PORT=process.env.PORT || 8000;

app.use(express.json());

 
//User Signup and Login
app.use('/', userRouter);

// app.use(auth);
// END POINT FOR ALL PRODUCTS
app.use("/products",AllProducts); 
app.use("/admin",adminController); 
 

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