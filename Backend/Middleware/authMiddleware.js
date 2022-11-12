const jwt = require('jsonwebtoken');
const { UserModel } = require('../Models/User.model');
require('dotenv').config();

//.....authentication middleware.......

const auth = (req,res,next)=>{
    var bearer = req.headers["authorization"];
    //console.log(bearer);
    if(bearer){
        bearer = bearer.split(" ");
        let token = bearer[1];
        if(!token){
            return res.status(401).send({
                message:"Please login to continue."
               });
        }else{
            let SECRET = process.env.jwt_secret_key;
            try{

                var decoded = jwt.verify(token, SECRET);
                console.log("decoded", decoded._id);
                if(decoded){
                    console.log("user = id added");
                    req.body.user = decoded._id;
                    next();
                }else{
                    return res.status(401).send({
                        message:"Please login to continue."
                       });
                }
            }catch(err){
                if(err.expiredAt && err.expiredAt< new Date()){
                    return res.status(401).send({
                      message:"Session expired."
                    })
                  }else{
                    return res.status(401).send({
                     message:"Please login to continue."
                    })
                }
            }
        }
    }else{
        return res.status(401).send({
            message:"Please login to continue."
           });
    }
}


//.......Check if user already exist.....
const checkUser = async(req, res, next) =>{
    const {name, contact, email, passeord} = req.body;
    const user= await UserModel.findOne({"email":email});
    if(user){
        res.send('User Already Exist!');
    }
    else{
        next();
    }
    
}

module.exports = { auth , checkUser }