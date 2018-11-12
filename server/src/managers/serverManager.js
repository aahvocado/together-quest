import express from 'express';
import http from 'http';

import SocketServer from 'components/SocketServer'; // generic server

const SERVER_PORT = 1111;

const app = express();
app.get('/status', function(req, resp) {
  resp.send('Server is up yo');
});

const server = http.createServer(app);
const io = new SocketServer(server);

// START!
server.listen(SERVER_PORT, async () => {
  await io.start();
  console.log('\x1b[36m', `TogetherQuest Server Started - localhost:${SERVER_PORT}`);  //cyan
});

export default server;
export {
  io,
  server,
}
