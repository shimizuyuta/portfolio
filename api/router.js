
var express = require('express')
var router = express.Router()
const AuthController = require('./controllers/AuthController');
const JwtValidator = require('./validators/JwtValidator');





// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  console.log('Time:aaaaaaaaaaaaaaaaa ', Date.now())
  next()
})

router.post('/auth/login',AuthController.login)
router.post('/sign',AuthController.sign)
router.get('/auth/user',AuthController.getUser)
router.post('/auth/logout',AuthController.logout)


// router.post('/auth/login',async(req,res)=>{
//   try{
//     const { email,password} = req.body;
//     console.log('email',email)
//     const user = {name:'aa',password:password,email:email} 
//     if (!user) {
//       const error = new Error("user with this email not found!");
//       error.statusCode = 401;
//       throw error;
//     }
//     console.log('user',user)

//   }catch(e){
//     console.log('e',e)
//   }
// })

// router.get('/auth/user',(req,res)=>{
//   const headers = req.headers
//   console.log(headers)
//   const bearToken = req.headers['authorization']
//   console.log(bearToken,'adddddddd')
//   res.send(200)
// })

router.post('/auth/register',async(req,res)=>{
  try{
    console.log(req,'aaaaaaaaa')
    const user = ({name:'aa',email:req.body.email})
    console.log(user)
    return user 
  }catch(e){
    console.log('e',e)
  }
})

module.exports = router