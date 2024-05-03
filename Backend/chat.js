// server.js

const express = require('express');
const http = require('http');
const socketio = require('socket.io');
const db = require('./ChatBase');
const app = express();
const threaddb = require('./ThreadDB');
const server = http.createServer(app);
const io = socketio(server);
const comDB = require('./comDB');

// Middleware to parse JSON bodies
app.use(express.json());

// Array to store chat messages for each thread
const threadMessages = {};

// Route to serve the chat room interface
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Socket.IO event handlers
io.on('connection', (socket) => {
  console.log('New user connected');

  // Handle new messages
  socket.on('message', async (data) => {
    const { username, message, threadId } = data;
    console.log(`Received message from ${username} in thread ${threadId}: ${message}`);
    
    // Save the message to the database
    try {
      const savedMessage = await db.createMessage(username, message, threadId);
      console.log('Message saved successfully:', savedMessage);
    } catch (error) {
      console.error('Error saving message:', error);
      // Handle error if unable to save the message
      // Emit an error event or send an appropriate response to the client
    }

    // Broadcast the message to all clients in the same thread
    socket.broadcast.to(threadId).emit('message', { threadId, message });
  });


  socket.on('getCom', async () => {
    console.log('Received getCom event from client');
    try {
      // Call the asynchronous getcom function from the comDB module
      const comList = await comDB.getcom();
      // Emit the list of communities back to the client
      console.log('Emitting comList:', comList);
      socket.emit('comList', comList);
    } catch (error) {
      console.error('Error fetching comList:', error);
      // Handle error if unable to fetch the list of communities
      // Emit an error event or send an appropriate response to the client
    }
  });

  socket.on('getThreads', async (data) => {
    try {
      // Call the getThreads function with the selected community name
      const threads = await threaddb.getThreads(data.communityId);
      // Emit the threads back to the client
      // console.log(threads);
      socket.emit('threads', threads);
    } catch (error) {
      console.error('Error fetching threads:', error);
      // Handle error if unable to fetch the threads
      // Emit an error event or send an appropriate response to the client
    }
  });

  // Handle user disconnection
  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

// Start the server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
