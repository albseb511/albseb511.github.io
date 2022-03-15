# WS - example

## Server

lets update the server to manage multiple connections

- on every new connection made, the server will add on message callback to each instance / client (ws.on("message"))
- on receiving a message from the client, broadcast / send the message to every client connected to the server
- on closing w print a message saying connected is closed

```js
const Websocket = require("ws");

const port = process.env.PORT || "8080";
// wsserv
const wsserver = new Websocket.WebSocketServer({ port }, () => {
  console.log(`conntected on localhost:${port}`);
});

wsserver.on("connection", function connection(ws) {
  ws.on("message", function incoming(message) {
    const payload = JSON.parse(message);
    console.log("received:", payload);

    // wsserver.clients contain list of all clients connected on the server
    // if client is open, then we send a message to every client
    for (const client of wsserver.clients) {
      if (client.readyState === Websocket.OPEN) {
        client.send(message);
      }
    }
  });
  // on close we close the connection
  ws.on("close", function () {
    console.log("connection closed");
  });
});
```

## Example:

With this backend, we should be able to receive and send messages to all clients connected to the server

- lets create a simple chat message application
- a user should be able to set their username
- a user should be able to send a message to the server
- on sending a message, the message is then sent to all clients connected on the server ( broadcasted )
- on receiving a message, the message should be parsed and the UI should be displayed

## Frontend

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        #messages{
            height: 20rem;
            border-radius: 1rem;
            background-color: #fff;
        }
    </style>
</head>
<body>
    <div id="messages">

    </div>
    <div id="user-box">
        <input type="text" id="name" placeholder="username"/>
        <button id="username-btn">SET USERNAME</button>
    </div>
    <div>
        <input type="text" id="message" placeholder="type something"/>
        <button disabled id="submit">POST</button>
        <div id="username">User: N/A</div>
    </div>

<body>
    <script type="text/javascript">
        const ws = new WebSocket("ws://localhost:8080");
        let user = null;
        // once your webpage starts
        ws.onopen = function(event){
            console.log(`connected`,event)
        }

        // on receiving a message
        ws.onmessage = async function (event) {
            try{
                // * Event.data is Blob
                const text = await event.data.text();
                const data = JSON.parse(text);
                receiveMessage(data)
            }
            catch(err){
                console.log(err)
            }
        };

        // sending a message to the server
        function sendMessage(){
            if(!user){
                console.log('user not defined')
                return
            }
            const message = document.getElementById("message").value;
            const payload = {
                username: user,
                message: message,
            }
            // stringify and send the message to the server
            if(ws.OPEN){
                ws.send(JSON.stringify(payload))
            }
            else{
                // incase the connection got disrupted
                alert("connection lost or not established")
            }
        }

        // update UI changees on receiving message
        function receiveMessage({message, username}){
            const messages = document.getElementById("messages")
            const msgEl = document.createElement("div");
            msgEl.textContent = `${message} - ${username}`;
            messages.append(msgEl);
        }

        // onload event listeners
        window.onload = function(){
            const submit = document.getElementById("submit");
            submit.addEventListener("click",sendMessage)

            const usernameBtn = document.getElementById("username-btn");
            usernameBtn.addEventListener("click",setUsername)
        }

        // manage setting username from client
        function setUsername(){
            const name = document.getElementById("name").value;
            user = name;
            if(!name){
                alert("please enter a name");
                return
            }
            const submit = document.getElementById("submit");
            const userbox = document.getElementById("user-box");
            submit.disabled = false;
            userbox.style.visibility = "hidden";
            const username = document.getElementById("username");
            console.log(name)
            username.textContent = `User: ${name}`
        }
    </script>
</body>
</html>
```
