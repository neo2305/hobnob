const express = require('express')
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/ChatBase')
.then(()=> console.log('Successful Database connection'))
.catch(err=> console.log('error'))

const messageSchema = new mongoose.Schema({
    user : String,
    text : String,
    thread_id : Number
})

const Message = mongoose.model('Messages' ,messageSchema)

async function createmessage(username,message_text,thread_idx){
    const text = new Message({
        user : username,
        text : message_text,
        thread_id : thread_idx
    });

    const result = await text.save()
    console.log(result)
}

createmessage('Neo','Yea',1)

module.exports={
    createmessage:createmessage

}
// createmessage('Saif','Nice to see u')