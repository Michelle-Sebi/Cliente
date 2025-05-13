import express from 'express';
import http from 'http';
import { WebSocketServer } from 'ws';

const PORT = 8999;
const server = http.createServer(express);
const wss = new WebSocketServer({ server })
const clients = new Map();

function sendToAll(ws, message, identify = true) {
  wss.clients.forEach(function each(client) {
    const username = identify && clients.has(ws) ? clients.get(ws) : '';
    const identification = identify ? `${username}: ` : '';
    client.send(identification + message);
  })
}

wss.on('connection', function connection(ws) {
  clients.set(ws)

  ws.on('message', function incoming(data) {
    let parsedData = JSON.parse(data);

    if (parsedData.type === "username") {
      const username = parsedData.username;
      clients.set(ws, username);
      sendToAll(ws, `${username} just joined the conversation`, false);
    }
    else if (parsedData.type === "message") {
      sendToAll(ws, parsedData.content);
    }
  })
})

server.listen(PORT, function () {
  console.log(`Server is listening on ${PORT}!`)
})



