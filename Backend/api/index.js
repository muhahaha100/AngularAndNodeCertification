const express = require('express');
var bodyParser = require('body-parser')
const app = express();

var urlencodedParser = bodyParser.urlencoded({ extended: false })

var mongoose = require('mongoose');

Schema = mongoose.Schema;

var userModel = new Schema({
    Name:{type:String},
    City:{type:String},
    Job:{type:String}
});

const { MongoClient } = require('mongodb');

//index.set('view engine', 'ejs');

const uri = "mongodb+srv://muhahaha100:RoBlOx1029384756$$@cluster0.4y4y6.mongodb.net/myDatabase?retryWrites=true&w=majority";

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

//app.use(express.json())

// [
//     {'id':1,'fname':'Rajan','lname':'Pokhrel','email':'rj@tcs.com','phone':12,'address':{'street':'12 W Peer','city':'Denton', 'zipcode':34567,'state':'Tx'}},
//     {'id':2,'fname':'Nima','lname':'Lama','email':'nl@tcs.com','phone':12,'address':{'street':'12 W Peer','city':'Denton', 'zipcode':34567,'state':'Tx'}},
//     {'id':3,'fname':'Simreab','lname':'Ketema','email':'rj@tcs.com','phone':12,'address':{'street':'12 W Peer','city':'Denton', 'zipcode':34567,'state':'Tx'}},
//     {'id':4,'fname':'Oscer','lname':'Cabrera','email':'rj@tcs.com','phone':12,'address':{'street':'12 W Peer','city':'Denton', 'zipcode':34567,'state':'Tx'}}
// ]

const profiles=[
    {'id':1,'fname':'Rajan','lname':'Pokhrel','email':'rj@tcs.com'},
    {'id':2,'fname':'Nima','lname':'Lama','email':'nl@tcs.com'},
    {'id':3,'fname':'Simreab','lname':'Ketema','email':'rj@tcs.com'},
    {'id':4,'fname':'Oscer','lname':'Cabrera','email':'rj@tcs.com'}
]

app.get('/', (req,res)=>
{
    res.send('Hello World!!')
})

app.get('/api/profiles',(req,res)=>{
    res.send(profiles
    )
})


app.get('/api/profiles/:id', (req,res)=>
{ const profile= profiles.find(p=>p.id===parseInt(req.params.id))
    if(!profile)
    {
        res.status(404).send('No profile found with given id')
    }
    res.send(profile)
})
//change the port number 
const port =process.env.PORT || 3000

//to add to the array

app.post('/api/profile',(req,res)=>
{
    const profile = {
        id:profiles.length+1,
        fname:req.body.fname,
        lname:req.body.lname,
        email:req.body.email

    }
    profiles.push(profile)
    res.send(profiles)

})

app.listen(8080,()=>console.log(`Listining on port ${port}...`))


app.get('/ok', (req, res) => {

    res.send("ok")
});

app.post('/ save', urlencodedParser, (req, res) => {
    console.log('Got body:', req.body);

    client.connect(err => {
        const collection = client.db("myDatabase").collection("userlist");
        // perform actions on the collection object

        let document = {
            Name: req.body.Name,
            Address: req.body.Address,
            Email: req.body.Email,
            Sneakers: req.body.Sneakers,
            Shampoos: req.body.Shampoos,
            DateOfInsertion: new Date()
        };

        console.log("what is this anyway:");

        console.log(document);

        console.log("got it");

        collection.insertOne(document).then(Error, what=>{
            if (Error){
                console.log(Error);
                return;
            }
            console.log("everything went to the promise?");
            client.close();
        });
    });

    res.sendStatus(200);
});

app.get('/get', (req, res) => {

    client.connect(err => {
        const collection = client.db("myDatabase").collection("userlist");

        collection.find({}).toArray(function(err, result){
            if (err) throw err;

            res.render(collection);

            client.close();
        });
    });
});

app.get('/api/v1/products', (req, res) => {
    client.connect(err => {
        const collection = client.db("myDatabase").collection("productlist");

        collection.find({}).toArray(function(err, result){
            if (err) throw err;

            console.log(collection);

            jsonResponse = {
                "status": "success",
                "products": result
            };

            res.send(jsonResponse);

            client.close();
        });
    });
});
// index.listen(8080);