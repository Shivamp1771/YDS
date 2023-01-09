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
    })
    signedUpUser.save()
    .then(data =>{
        response.json(data)
        // code changes
    })
    .catch(error =>{
        response.json(error)
        // response.json(found)
    })
})

module.exports = router