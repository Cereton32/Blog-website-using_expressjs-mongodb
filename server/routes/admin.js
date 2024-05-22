const express = require('express')
const Post =  require('../models/post')
const router = express.Router()



router.get('/admin',(request,response)=>{
    response.send("this is admin page")
})




module.exports= router