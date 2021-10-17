//here we are going to define schema

const mongoose=require('mongoose')

const Person=mongoose.model('Person',{
    name:{type:String ,required:true},
    place:{type:String},
    state:{type:String},
    age:{type:Number}
},'Person')

module.exports=Person