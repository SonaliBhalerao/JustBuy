const {AdminModel} = require("../Models/Admin.model")

const validator = (req,res,next) => {
console.log(req.body.email 
    )
    AdminModel.findOne({ email: req.body.email }, function(err, user) {
        if(err) {
           //handle error here

        }
      
        //if a user was found, that means the user's email matches the entered email
        if (user) {
            //   var err = new Error('A user with that email has already registered. Please use a different email..')
              res.json({msg:"User Already Exists"})
            //  return next(err);
        } else {
            //code if no user with entered email was found
            next()
        }
     }); 
}

module.exports = {validator}