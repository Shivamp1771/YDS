const mongoose = require('mongoose')

const signUpTemplate = new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    middleName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    birthDate:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model('mytable',signUpTemplate)