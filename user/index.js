const express = require('express')
let router = express.Router()
const userController = require('./user.controller')
//const restorantPageController=require('./restorant.page.controller')


router.post('/login',userController.login )
router.post('/register',userController.register )
router.get('/getAllUser',userController.alluser ) 
router.get('/verify',userController.verify ) 

module.exports = router 
