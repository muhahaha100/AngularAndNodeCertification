const express=require('express')
const app = express()

app.use(express.json())

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

app.listen(3000,()=>console.log(`Listining on port ${port}...`))