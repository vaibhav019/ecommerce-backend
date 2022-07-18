const mongoose = require('mongoose')

const uniqid=require('uniqid')
/**
* Product Schema
*/
const productSchema = new mongoose.Schema({
    id: { 
        type: String,
         unique: true,
        required: true,
         default: uniqid("userId_") 
    },
    name: {
        type: String,
        required: true
    },
    quantity:{
        type:Number,
        required:true,
        default:1
    },
    description: {
        type: String,
        //required: true,
        
    },
    
    price: {
        type: Number,
        //required: true
    },
    rating: {
        type: Number,
        //required: true,
        //unique: true
    },
    image:{
        type:String, 
        default:""
    },
    

})

let Product = mongoose.model('user', userSchema)

module.exports = Product;