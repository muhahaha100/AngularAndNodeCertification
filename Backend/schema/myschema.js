const mongoose = require('mongoose')
const myschema = mongoose.Schema

const Loginschema = new myschema({
    firstname: String,
    lastname: String,
    email:  String,
    password: String
},{versionKey: false})

module.exports = mongoose.model('mylogin', Loginschema, 'logintable')