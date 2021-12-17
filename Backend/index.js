const express = require('express')
const app = express()

const db = require('./db')    //connect with database
var myschemacontroler = require('./schema/myschemacontroller')  //query
app.use('/users', myschemacontroler)    //query to endpoint users

var myauthcontroller = require('./auth/myauthcontroller')
app.use('/auth', myauthcontroller)     //authentication implementation

const session = require('express-session')
app.use(session({secret: 'myloginsecret', resave: false, saveUninitialized: false}))

/**
 *  vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
 *
 *  THIS IS NOT THE API THAT COMMUNICATED WITH MONGO DB (at least for the product components )
 *  THE REAL API IS UNDER /api/index.js
 *  Sorry for the confusion
 *
 *  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
 *
 */

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

app.get('/oscar',(req,res)=>{
    let json = [
        products = {
            name = "sugoi",
            price = 100
        }
    ];
    res.send(JSON.stringify(json));
})

app.listen(8080)