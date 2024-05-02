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
    console.log(`Message received from ${data.username} in thread ${data.threadId}: ${data.message}`);
    
    // Store the message in threadMessages
    const threadId = data.threadId;
    if (threadId) {
      if (!threadMessages[threadId]) {
        threadMessages[threadId] = []; // Create an array for threadId if it doesn't exist
      }
      threadMessages[threadId].push({ username: data.username, message: data.message });
    }

    // Broadcast message to the specific thread identified by its ID
    if (threadId) {
      io.to(threadId).emit('message', data);
    }
  });

  // Send chat messages for the specific thread to client
  socket.on('getMessages', (threadId) => {
    const messages = threadMessages[threadId] || [];
    socket.emit('threadMessages', messages);
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
      console.log(threads);
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
