const express=require('express')
const bodyparser=require('body-parser')
var cors=require('cors')   //or connecting both angular and node

const{mongoose}=require('./db')
const personcontroller=require('../projectnodenew/controlles/personcontroller')

const app=express()
app.use(bodyparser.json())
app.use(cors())

app.use(personcontroller)

//connection part

const PORT=3000

app.listen(PORT,()=>{
    console.log(`server is running ${PORT}`)
})