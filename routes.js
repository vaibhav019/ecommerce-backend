const express = require('express')
let router = express.Router()
let userroutes = require('./user')


 router.use('/user', userroutes)


module.exports = router