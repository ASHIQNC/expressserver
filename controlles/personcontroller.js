
const { ObjectId } = require('bson')
const express=require('express')
const Router=express.Router()

const   Person =require('../models/person')

Router.get('/',(req,res)=>{
    Person.find((err,doc)=>{
        if(!err){
            res.send(doc)
        }else{
            console.log('error in retrieving the file:'+JSON.stringify(err))
        }

    })
})

Router.post('/',(req,res)=>{

    const pers= new Person({
        name:req.body.name,       //nammal modelsil create cheytha new object evde vilikanm ie person
        place:req.body.place,
        state:req.body.state,       //postman vechittan data post chythirikunnath
        age:req.body.age

    })
    pers.save((err,doc)=>{
        if(!err){
            res.send(doc)
        }else{
            console.error('errror recieved whiile sending:'+JSON.stringify(err))
        }
    })
})

Router.get('/:id',(req,res)=>{
    if(!ObjectId.isValid(req.params.id))
        return res.send(`no record with this given id: ${req.params.id}`)
    
        Person.findById(req.params.id,(err,doc)=>{
            if(!err){
                res.send(doc)
            }else{
                console.error('errror recieved whiile finding the file:'+JSON.stringify(err))

            }

        })
    
})

//finding the data using name

/*
Router.get('/:name',(req,res)=>{
            Person.find({name:req.params.name},(err,doc)=>{
                if(!err){
                    res.send(doc)
                }else{
                    console.error('errror recieved whiile finding the file:'+JSON.stringify(err))
    
                }
    
            }) 
    })
    */

    //update

Router.put('/:id',(req,res)=>{
    const id=req.params.id

    if(!ObjectId.isValid(id))
    return res.send(`no record with this given id: ${req.params.id}`)

    const pers={
        name:req.body.name,
        place:req.body.place,
        state:req.body.state,
        age:req.body.age
    }

    Person.findByIdAndUpdate(id, {$set:pers}, {new:true} ,(err,doc)=>{

        if(!err){
            res.send(doc)
        }else{
            console.log('error in updating the file:'+JSON.stringify(err))
        }

    } )
 
})


//delete


Router.delete('/:id',(req,res)=>{
    if(!ObjectId.isValid(req.params.id))
        return res.send(`no record with this given id: ${req.params.id}`)
    
        Person.findByIdAndDelete(req.params.id,(err,doc)=>{
            if(!err){
                res.send(doc)
            }else{
                console.error('errror recieved whiile deleting the file:'+JSON.stringify(err))

            }

        })
    
})




module.exports=Router