const express = require('express')
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/ChatBase')
.then(()=> console.log('Successful Database connection'))
.catch(err=> console.log('error'))

const commSchema = new mongoose.Schema({
    Community_id : Number,
    Community_name : String,
    Creator : String,
    Description : String,
    Created_on :{type: Date, default:Date.now}
})

const Communitites = mongoose.model('Communities' ,commSchema)
async function createcom(username,message_text){
    const text = new Communitites({
        Community_id: 5,
        Community_name : "Community 5",
        Creator : "Pandu",
        Description: "test com 5",
    });

    const result = await text.save()
    console.log(result)
}

async function getcom(){
    // const courses = await Course.find({rating : {$gte:3}}).select({name : 1,publishDate: 1}).sort({name:1})
    const comms = await Communitites.find({},'Community_name')
    const communityNames = comms.map(community => community.Community_name);
    return communityNames
}
getcom()
module.exports={
    createcom : createcom,
    getcom : getcom
}
    
