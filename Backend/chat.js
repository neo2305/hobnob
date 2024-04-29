const express = require('express');
const http = require('http');
const socketio = require('socket.io');
const db = require('./ChatBase')
const app = express();
const server = http.createServer(app);
const io = socketio(server);
const comDB = require('./comDB');

// Array to store chat messages
let messages = [];

// Middleware to parse JSON bodies
app.use(express.json());

// Route to serve the chat room interface
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');

});


// Socket.IO event handlers
io.on('connection', (socket) => {
  console.log('New user connected');

  // Send chat messages to client
  io.emit('initialMessages', messages);

  // Handle new messages
  socket.on('message', (data) => {
    console.log(`Message received from ${data.username}: ${data.message}`);
    io.emit('message', data);

    // Add message to array
    messages.push(data);

    // Broadcast message to all connected clients
    db.createmessage(data.username,data.message)
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
