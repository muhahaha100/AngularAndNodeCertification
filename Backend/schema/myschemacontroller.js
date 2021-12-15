const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
router.use(bodyParser.urlencoded({extended: true}))
router.use(bodyParser.json())

const mylogin = require('./myschema')

router.get('/',(req,res)=>{
    mylogin.find({}, (err,dbdata) => {
        if(err) 
        {
            return res.status(500).send()
        }
        else {
            res.status(200).send(dbdata)
        }
    })
})

module.exports = router 