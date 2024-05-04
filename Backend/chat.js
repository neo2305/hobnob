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

// Route to serve the chat room interface
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Socket.IO event handlers
io.on('connection', (socket) => {
  console.log('New user connected');

  socket.on('joinRoom', (threadId) => {
    socket.join(threadId);
    console.log(`User joined room: ${threadId}`);
});

// Handle new messages
socket.on('message', async (data) => {
  console.log("Received Message:", data);
  try {
      // Extract data from the client
      const { username, message, threadId } = data;
      
      // Save the message to the database
      const savedMessage = await db.createMessage(username, message, threadId);
      sentdata = [username,message,threadId]
      // Broadcast the message to all clients
      console.log(sentdata)
      io.emit('newMessage', sentdata);
  } catch (error) {
      console.error('Error saving message:', error);
  }
});

  // Handle fetching messages for a thread
  socket.on('getMessages', async (data) => {
    const { threadId } = data;
    try {
      // Fetch all messages for the thread
      const messages = await db.getMessages(threadId);
      // Emit the messages to the client
      socket.emit('threadMessages', { threadId, messages });
    } catch (error) {
      console.error('Error fetching messages:', error);
      // Handle error if unable to fetch messages
      // Emit an error event or send an appropriate response to the client
    }
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
