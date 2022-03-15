# Socket IO

## Introduction

Although ws is a light weight implementation, we want to use a library that provides a lot of inbuilt functionality
Socket.io is a library that provides this functionality for us, which is Performant, Reliable and Scalable

- In case the WebSocket connection is not possible, it will fall back to HTTP long-polling. And if the connection is lost, the client will automatically try to reconnect.
- In most cases, the connection will be established with WebSocket, providing a low-overhead communication channel between the server and the client.
- Scale to multiple servers and send events to all connected clients with ease.

Socket.IO is a library that enables low-latency, bidirectional and event-based communication between a client and a server.

![](https://socket.io/images/bidirectional-communication2.png)

It is built on top of the WebSocket protocol and provides additional guarantees like fallback to HTTP long-polling or automatic reconnection.

## Example

Server

```js
import { Server } from "socket.io";

const io = new Server(3000);

io.on("connection", (socket) => {
  // send a message to the client
  socket.emit("hello from server", 1, "2", { 3: Buffer.from([4]) });

  // receive a message from the client
  socket.on("hello from client", (...args) => {
    // ...
  });
});
```

Frontend

```js
import { io } from "socket.io-client";

const socket = io("ws://localhost:3000");

// send a message to the server
socket.emit("hello from client", 5, "6", { 7: Uint8Array.from([8]) });

// receive a message from the server
socket.on("hello from server", (...args) => {
  // ...
});
```

## What socket.io is not

Socket.IO is NOT a WebSocket implementation.

Although Socket.IO indeed uses WebSocket for transport when possible, it adds additional metadata to each packet. That is why a WebSocket client will not be able to successfully connect to a Socket.IO server, and a Socket.IO client will not be able to connect to a plain WebSocket server either.

```js
// WARNING: the client will NOT be able to connect!
const socket = io("ws://echo.websocket.org");
```

## Features

- HTTP long-polling fallback
- Automatic reconnection
- Packet buffering
- Acknowledgements
- Broadcasting
- Multiplexing

## Server Installation

```
npm install socket.io
```

## Setup

We can setup socket io in the following manner

```js
const { Server } = require("socket.io");

const io = new Server({
  /* options */
});
// or
const io = new Server(3000, {
  /* options */
});

io.on("connection", (socket) => {
  // ...
  console.log(socket.id);
});

io.listen(3000);
```

## With express

if you want to setit up with express you can also do it in this way.

```js
const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  /* options */
});

io.on("connection", (socket) => {
  // ...
  console.log(socket.id);
});

httpServer.listen(3000);
```

Now when a client connects to a server, it will print the socket id

## Server Client

The following image shows how the server talks to the client in a bi directional way

![](https://socket.io/images/bidirectional-communication-socket.png)

## installing on the client

- so once we have the server setup, we can install socket io on the client

```html
<script
  src="https://cdn.socket.io/4.4.1/socket.io.min.js"
  integrity="sha384-fKnu0iswBIqkjxrhQCTZ7qlLHOFEgNkRmK2vaO/LbTZSXdJfAu6ewRBdwHPhBo/H"
  crossorigin="anonymous"
></script>
<script>
  const socket = io("ws://localhost:8080");
  socket.on("connect", () => {
    console.log(socket.id);
  });
</script>
```

## notes

- its important to understand, that if you try to use the native WebSocket from client, it will not work for you
- because Socket.IO is NOT a WebSocket implementation.
- so you will have use socket.io on the client side as well like the previous example
- once you connect you will find the id of the client, you will be able to see the server also print this id on the backend
- you may need to allow cors on the system to get it to work correctly
- please see this link to setup cors (https://socket.io/docs/v4/handling-cors/)
- you can use a plugin to enable cors temporarily

```js
io.on("connection", (socket) => {
  // ...
  console.log(socket.id);
});
```

## Lets update our server app

so lets make our server better

- lets create our server with `new io.Server(8080)` lets call it `socketServer`
- we will maintain a count of connections as well connected to the server
- so lets declare a variable as 0
- now lets create an event listener for when a connection is established

```js
socketServer.on("connection",socket=>{ ... })
```

- the socket that you define in the arrow function is the client instance
- you can check by the id of the instance
- now everytime a new connection is established, we can send out a notification to other users
- now the good part of working with socket.io is that we can create our own event names, which was much harder to do with native socket
- so we can just create an emitter, which emits a message from the server to the client or vise versa
- so on the server lets add the following code

```js
    // inside the socketServer.on callback
    socket => {
    ...
    / * emit a ntoification to all users except the client */
    socket.broadcast.emit("notification",{
        id: socket.id,
        message: "a new user has joined"
    })
    ...
    }
```

- you can also write socket.emit, but the difference is that when you do socket.emit it will send to all clients that are connected
- to send to all users except the user, you need to use the socket.broadcast.emit method
- now you can listen to this event from the frontend by having a listener

#### To all connected clients

![](https://socket.io/images/broadcasting.png)

```js
io.emit("hello", "world");
```

#### To all connected clients except the sender

![](https://socket.io/images/broadcasting2.png)

```js
io.on("connection", (socket) => {
  socket.broadcast.emit("hello", "world");
});
```

```js
socket.on("notification", (payload) => {
  try {
    console.log(payload);
    if (payload.type === "user_message") receiveMessage(payload);
  } catch (err) {
    console.log(err);
  }
});
```

```js
const io = require("socket.io");
// * create a socket server
const socketServer = new io.Server(8080);

let count = 0;

// * when a client connects
socketServer.on("connection", (socket) => {
  // * emit a ntoification to all users
  socket.broadcast.emit("notification", {
    id: socket.id,
    message: "a new user has joined",
  });

  console.log(`total connections`, ++count);

  // * if an event called message is received, handle in this manner
  socket.on("message", (data) => {
    socketServer.emit("notification", {
      ...data,
      type: "user_message",
      timestamp: new Date().toUTCString(),
    });
  });

  socket.on("disconnect", () => {
    console.log(`total connections`, --count);
  });
});
```
