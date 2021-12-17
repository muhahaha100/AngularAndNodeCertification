//connect with Mongodb database

const mongoose = require('mongoose')

const myserverlocation= 'mongodb://localhost:27017/storedb'

mongoose.connect(
    myserverlocation,
    {useUnifiedTopology: true, useNewUrlParser: true},
    (err)=>{
        if (err) {
            console.log("Error")
        }
    }
)