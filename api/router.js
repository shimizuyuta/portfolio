// var express = require('express')
// var router = express.Router()

// router.get('/',async(req,res)=>{
//     console.log('aaa4444444444')
//     res.send('hallo')
// });

// router.get('/test',(req,res)=>{
//     res.send('aaaaaaaaaaaaaa')
// })

// module.exports = router;
var express = require('express')
var router = express.Router()

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  console.log('Time:aaaaaaaaaaaaaaaaa ', Date.now())
  next()
})
// define the home page route
router.get('/', function (req, res) {
  res.send('Birds home page')
})
// define the about route
router.get('/about', function (req, res) {
  res.send('About birds')
})

module.exports = router