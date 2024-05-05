const express = require('express');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/ChatBase')
    .then(() => console.log('Successful database connection'))
    .catch(err => console.error('Error connecting to the database:', err));

const messageSchema = new mongoose.Schema({
    user: String,
    text: String,
    thread_id: Number
});

const Message = mongoose.model('Message', messageSchema);

async function createMessage(username, messageText, threadId) {
    try {
        const message = new Message({
            user: username,
            text: messageText,
            thread_id: threadId
        });

        const result = await message.save();
        // console.log('Message saved successfully:', result);
        return result;
    } catch (error) {
        console.error('Error saving message:', error);
        throw error; // Re-throw the error for handling in the calling function
    }
}

async function getMessages(threadId) {
    try {
        const messages = await Message.find({ thread_id: threadId });
        console.log('Messages retrieved successfully:', messages);
        return messages;
    } catch (error) {
        console.error('Error fetching messages:', error);
        throw error; // Re-throw the error for handling in the calling function
    }
}

module.exports = {
    createMessage: createMessage,
    getMessages: getMessages
};
