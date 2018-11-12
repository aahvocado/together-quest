import {createConnection} from 'services/websocketManager';

// connect to websocket server
const socket = createConnection({
  url: 'localhost:1111',
});

socket.on('connect', () => {
  console.log('connected to websocket server');
});
