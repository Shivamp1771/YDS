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
    },
    immigrationStatus:{
        type:String,
        enum: ['Student','Work Permit','PR'],
        required: true
    },
    collegeName: {
        type:String,
        required:true
    },
    program:{
        type:String,
        required:true
    },
    campus:{
        type:String,
        required:true
    },
    intake:{
        type:String,
        required:true
    },
    indiaName:{
        type:String,
        required:true
    },
    indiaAddress:{
        type:String,
        required:true
    },
    indiaCity:{
        type:String,
        required:true
    },
    indiaPhone:{
        type:Number,
        required:true
    },
    refName:{
        type:String,
        required:true
    },
    refPhone:{
        type:Number,
        required:true
    }
})

module.exports = mongoose.model('mytable',signUpTemplate)