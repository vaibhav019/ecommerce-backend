const express = require('express')
const routes = require('./routes')
const Mongoose = require('mongoose')
const bodyParser = require('body-parser')
const path=require('path')
const cors = require('cors');


const dburl = "mongodb://localhost:27017/ecommerceDB"

const Port = process.env.PORT || 9000

let server = express()
server.use( cors() );
console.log(Port)


server.use(bodyParser.json());


Mongoose.connect(dburl).then(function(){
    console.log("Connetcted to database")

    server.listen(Port, function(){
        console.log("server is running on :",Port)
    })
},function(error){
    console.log("Error in connecting to mongodb",error)
})
server.get('/test',(req,res,next)=>{
    //res.send('<h1>testing the application server</h1>')
    res.json([{
        "name":"vaibhav singh",
        "role":"sde",
        "sal":"15LPA"
    }])
})


server.use(routes)



   
        





 