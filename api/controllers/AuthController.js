const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.sign = async (req,res,next) =>{
    const{ fullname,email,password} = req.body;
    try{
      console.log('sign__________')
      const user = ({name:fullname,email:email,password:password})
      if(user){
        const error = new Error(
            "Eamil already exist, please pick another email!"
          );
          res.status(409).json({
            error: "Eamil already exist, please pick another email! ",
          });
          error.statusCode = 409;
          throw error;
      }
          res.status(200).json({
            message: "User created",
            user: user,
          });
    }catch(e){

    }
}

exports.login = async (req,res,next) =>{
    console.log('aaaaaaa')
    const {password,email} = req.body;
    try{
    const user = ({name:'aa',email:email,password:password});
    if(!user){
        const error = new Error("user with this email not found!");
        error.statusCode = 401;
        throw error;
    };
    console.log('user',user)
    // const comparePassword = bcrypt.compare(password, user.password);

    // if (!comparePassword) {
    //   const error = new Error("password is not match!");
    //   error.statusCode = 401;
    //   throw error;
    // }
    // const token = jwt.sign({ email: user.email }, "expressnuxtsecret", {
    //     expiresIn: "20m", // it will expire token after 20 minutes and if the user then refresh the page will log out
    //   });
    const payload = {
        user: req.body.user
    };
    const option = {
        expiresIn: '20m'
    }
    const token = jwt.sign(payload, "sss", option);
    


    console.log('token______',token)
      res.status(200).json({ token: token});
    }catch(err){
        if (!err.statusCode) {
            err.statusCode = 500;
          }
          next(err);
    }
}
exports.logout = (req,res,next) =>{

}

exports.getUser = (req,res,next) =>{
    console.log('adreq_______________')
    console.log(req.header('Authorization'));
    res.status(200).json({
        user: {
          id: 'a',
          fullname: 'a',
          email:'a',
        },
      });
}