require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const router = express.Router();
const { Nuxt, Builder } = require('nuxt')

const config = require('../nuxt.config')

config.dev = process.env.NODE_ENV !== 'production'

async function start(){
  　const nuxt = new Nuxt(config)
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    await nuxt.ready()
  }
  app.use(nuxt.render)
  
 
  const port = process.env.PORT || 5000;
  
  app.listen(port,()=>{
          console.log(`server started on ${port}`)
  })
  
  
  
}

start()

// 開発モードのときのみビルドする


