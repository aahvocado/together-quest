import "@babel/polyfill";

import express from 'express';
import http from 'http';

import SocketServer from 'components/SocketServer'; // generic server

const SERVER_PORT = 1111;

const app = express();
app.get('/health', function(req, resp) {
  resp.send('server is okay');
});

const server = http.createServer(app);
const io = new SocketServer(server);

// START!
server.listen(SERVER_PORT, async () => {
  await io.start();
  console.log('\x1b[36m', 'TogetherQuest Server Started');  //cyan
});
