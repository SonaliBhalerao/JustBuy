const {UserModel} = require("../model/User.model")

const validatorLogin = (req,res,next) => {
console.log(req.body.email 
    )
    UserModel.findOne({ email: req.body.email }, function(err, user) {
        if(err) {
           //handle error here

        }
      
        //if a user was found, that means the user's email matches the entered email
        if (user) {
            //   var err = new Error('A user with that email has already registered. Please use a different email..')
            //  return next(err);
            next()
        } else {
            //code if no user with entered email was found
            res.json({msg:"Invalid Credentials"})
        }
     }); 
}

module.exports = {validatorLogin}