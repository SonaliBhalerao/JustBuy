const mongoose = require("mongoose");
require("dotenv").config();

const Connection = mongoose.connect(process.env.MONGOATLASURL,
    {
        useNewUrlParser: true
    });

module.exports={Connection};