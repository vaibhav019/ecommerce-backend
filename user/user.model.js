const mongoose = require('mongoose')

const uniqid=require('uniqid')
/**
* User Schema
*/
const userSchema = new mongoose.Schema({
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
    password:{
        type:String,
        required:true
    },
    role: {
        type: String,
        required: true,
        default: 'user'
    },
    
    Contact: {
        type: String,
        //required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    verified:{
        type:Boolean, 
        default:false
    },
    

})

let User = mongoose.model('user', userSchema)

module.exports = User;