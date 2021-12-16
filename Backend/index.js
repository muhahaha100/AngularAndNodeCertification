const express = require('express')
const app = express()

const db = require('./db')    //connect with database
var myschemacontroler = require('./schema/myschemacontroller')  //query
app.use('/users', myschemacontroler)    //query to endpoint users

var myauthcontroller = require('./auth/myauthcontroller')
app.use('/auth', myauthcontroller)     //authentication implementation

const session = require('express-session')
app.use(session({secret: 'myloginsecret', resave: false, saveUninitialized: false}))

const myrequest = require('request')

app.set('view engine', 'ejs')

const url = "localhost:4200"

//Function where promise is implemented to fetch data from Frontend
function getDataFromFrontend(url) {
    return new Promise((resolve, reject) =>{
        myrequest.get(url, (err, resp, body) => {
            if (err) {
                reject(err)
            }
            else {
                resolve(body)
            }
        }).catch((err) => {console.log(err)})
    })
}




app.get('/',(req,res)=>{
    var mydatafrompromose = getDataFromFrontend(url)
    mydatafrompromose.then(JSON.parse).then((result) => {
        res.send(result)
    })
})

app.listen(8080)