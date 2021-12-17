const express = require('express')
const router = express.Router()
const app = express()

const bodyparser = require('body-parser')
router.use(bodyparser.urlencoded({ extended: true }))
router.use(bodyparser.json())

const users = require('../schema/myschema')
app.set('view engine', 'ejs')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = { 'secret': 'mysecret' }

//Register the User
router.post('/users/register', (req, res) => {
    const myhashpassword = bcrypt.hashSync(req.body.password, 8)
    users.create({
        fname: req.body.fname,
        lname: req.body.lname,
        email: req.body.email,
        password: myhashpassword,
        type: "customer"
    },(err,mydata) => {
        if(err) 
        {
            return res.status(500).send("Initial Server Error")
        }
        else {
            var mytoken = jwt.sign({id: mydata._id}, config.secret, {expiresIn: 3600})
            return res.status(200).send({ auth: true, token: mytoken })
        }
    })
})

//Register the User
router.post('/users/login', (req, res) => {
    users.findOne({
        email: req.body.email,
    },(err,mydata) => {
        if(err) return res.status(500).send("Initial Server Error")
        const nouser = encodeURIComponent('User Not Found')
        if(!mydata){
            res.redirect('/?nouser=' + nouser)
        }
        else {
            const validate = bcrypt.compareSync(req.body.password, mydata.password)
            if(!validate) return res.status(401).send({auth:false, token: null})
            var mytoken = jwt.sign({id: mydata._id}, config.secret, {expiresIn: 3600})
            return res.status(200).send({ auth: true, token: mytoken })
        }
    })
})

module.exports = router