const mongoose = require('mongoose')
const myschema = mongoose.Schema

const Loginschema = new myschema({
    fname: String,
    lname: String,
    phone: Number,
    email:  String,
    address: String,
    password: String,
    type: String
},{versionKey: false})

module.exports = mongoose.model('users', Loginschema, 'logintable')