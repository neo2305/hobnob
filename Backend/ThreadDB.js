const express = require('express')
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/ChatBase')
.then(()=> console.log('Successful Database connection'))
.catch(err=> console.log('error'))

const threadSchema = new mongoose.Schema({
    thread_id : Number,
    Community_id : Number,
    Title : String,
    Created_by : String,
    thread_Created_on :{type: Date, default:Date.now}
})

const Threads = mongoose.model('Threads' ,threadSchema)
async function createthread(username,message_text){
    const text = new Threads({
        thread_id : 1,
        Community_id : 3,
        Title : "Test Thread_31",
        Created_by : "Akhil",
    });

    const result = await text.save()
    console.log(result)
}
createthread()
