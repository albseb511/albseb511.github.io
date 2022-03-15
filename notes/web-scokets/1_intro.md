# The WebSocket API (WebSockets)

The WebSocket API is an advanced technology that makes it possible to open a two-way interactive communication session between the user's browser and a server. With this API, you can send messages to a server and receive event-driven responses without having to poll the server for a reply.

Historically, creating web applications that need bidirectional communication between a client and a server (e.g., instant messaging and gaming applications) has required an abuse of HTTP to poll the server for updates while sending upstream notifications as distinct HTTP calls

## This results in a variety of problems:

- The server is forced to use a number of different underlying TCP
  connections for each client: one for sending information to the
  client and a new one for each incoming message.
- The wire protocol has a high overhead, with each client-to-server
  message having an HTTP header.
- The client-side script is forced to maintain a mapping from the
  outgoing connections to the incoming connection to track replies.

A simpler solution would be to use a single TCP connection for traffic in both directions. This is what the WebSocket Protocol provides.
Combined with the WebSocket API [WSAPI], it provides an alternative to HTTP polling for two-way communication from a web page to a remote server.

## Applications

The same technique can be used for a variety of web applications:

- games
- stock tickers
- multiuser applications with simultaneous
- editing, user interfaces exposing server-side services in real time, etc.

## OSI Layer:

The Open Systems Interconnection model (OSI model) is a conceptual model that characterises and standardises the communication functions of a telecommunication or computing system without regard to its underlying internal structure and technology. Its goal is the interoperability of diverse communication systems with standard communication protocols.

In the OSI reference model, the communications between a computing system are split into seven different abstraction layers: Physical, Data Link, Network, Transport, Session, Presentation, and Application.

![](https://s7280.pcdn.co/wp-content/uploads/2018/06/osi-model-7-layers-1.png)

## TCP:

The folloiwng image is a representation of how TCP connections are handled
![](https://s3.ap-south-1.amazonaws.com/afteracademy-server-uploads/what-is-a-tcp-3-way-handshake-process-three-way-handshaking-establishing-connection-6a724e77ba96e241.jpg)

## HTTP Vs WebSockets

Comparison of how HTTP and WebSockets are handled

- ![](https://miro.medium.com/max/900/1*jTmCp3L3eVEG4fokeuqQZQ.png)

## Websockets URL

```
ws-URI = "ws:" "//" host [ ":" port ] path [ "?" query ]
wss-URI = "wss:" "//" host [ ":" port ] path [ "?" query ]
```

WebSocket is a naturally full-duplex, bidirectional, single-socket connection. With WebSocket, your HTTP request becomes a single request to open a WebSocket connection and reuses the same connection from the client to the server, and the server to the client.

WebSocket reduces latency. For example, unlike polling, WebSocket makes a single request. The server does not need to wait for a request from the client. Similarly, the client can send messages to the server at any time. This single request greatly reduces latency over polling, which sends a request at intervals, regardless of whether messages are available.
