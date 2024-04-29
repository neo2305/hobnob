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

async function getThreads(username, Comm_id) {
    const threads = await Threads.find({ Community_id: Comm_id });
    return threads;
}


module.exports = {
    getThreads: getThreads
};

// const { getThreads } = require('./module');

// getThreads(null, 2)
//     .then(threads => {
//         console.log(threads);
//     })
//     .catch(error => {
//         console.error('Error:', error);
//     });

//  Base Code to call the function in other file