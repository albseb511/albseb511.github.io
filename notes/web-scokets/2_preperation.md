# WS library - setup

ws is a simple to use, blazing fast, and thoroughly tested WebSocket client and server implementation.

## Installation

```
npm install ws
```

```js
const ws = require("ws");

// * web socket server
const port = 8080;
const wsserver = new ws.WebSocketServer({ port: port }, () => {
  console.log(`listening on port: ${port}`);
});
```

## Sending and receiving text data

The following code is for the client side or html pages

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script type="text/javascript">
      const ws = new WebSocket("ws://localhost:8080/");

      ws.onopen = function open() {
        ws.send("something");
      };

      ws.onmessage = function message(data) {
        console.log("received: %s", data);
      };
    </script>
  </body>
</html>
``;
```

## Server

Write the following code for backend

```js
// index.js
const { WebSocketServer } = require("ws");

const wsserver = new WebSocketServer({ port: 8080 }, () => {
  console.log(`listening on port: ${8080}`);
});

wsserver.on("connection", function connection(ws) {
  ws.on("message", function message(data) {
    console.log("received: %s", data);
  });

  ws.send("something");
});
```

if you start the server with and open the html page to connect to the application you will see the message Something on the server

`node index.js`
