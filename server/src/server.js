import express from 'express';
import http from 'http';

import SocketServer from 'components/SocketServer'; // generic server

const SERVER_PORT = 1111;

const app = express();
app.get('/health', function(req, resp) {
  resp.send('EventApp is running');
});

const server = http.createServer(app);
const io = new SocketServer(server);

// START!
server.listen(SERVER_PORT, async () => {
  await io.start();
});
