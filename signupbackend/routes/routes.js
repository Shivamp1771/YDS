const express = require('express')
const router = express.Router()
const signUpTemplateCopy = require('../models/SignUpModels')

router.post('/signup', (request, response) =>{
    const signedUpUser = new signUpTemplateCopy({
        firstName:request.body.firstName,
        middleName:request.body.middleName,
        lastName:request.body.lastName,
        address:request.body.address,
        city:request.body.city,
        phone:request.body.phone,
        email:request.body.email,
        birthDate:request.body.birthDate,
        immigrationStatus: request.body.immigrationStatus,
        collegeName: request.body.collegeName,
        program: request.body.program, 
        campus: request.body.campus,
        intake: request.body.intake,
        indiaName: request.body.indiaName,
        indiaAddress: request.body.indiaAddress,
        indiaCity: request.body.indiaCity,
        indiaPhone: request.body.indiaPhone,
        refName: request.body.refName,
        refPhone: request.body.refPhone
    })
    signedUpUser.save()
    .then(data =>{
        response.json(data)
    })
    .catch(error =>{
        response.json(error)
    })
})

module.exports = router