
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
router.post('/auth/sign',AuthController.sign)
router.get('/auth/user',AuthController.getUser)
router.post('/auth/logout',AuthController.logout)


module.exports = router