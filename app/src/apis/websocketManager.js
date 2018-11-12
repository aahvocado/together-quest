import io from 'socket.io-client';
import _ from 'lodash';

/**
* singleton to handle the connection opened for WebSockets
*
*
* @link https://socket.io/docs/client-api/
*/
let socket = null;

/**
* create a Socket Connection, called in `app.js`
*
* @param {Object} config
* @returns {Manager<Socket.IO>}
*/
function createConnection(config = {}) {
  const {url, userId, userName, path} = config;

  // pick specific options for io (https://socket.io/docs/client-api/#io-url-options) and Manager (https://socket.io/docs/client-api/#new-Manager-url-options)
  const configOptions = _.pick(config, ['forceNew', 'path', 'reconnection', 'reconnectionAttempts', 'reconnectionDelay', 'reconnectionDelayMax', 'randomizationFactor', 'timeout', 'autoConnect', 'query', 'parser']);

  // initialize and cache socket connection
  // NOTE: without additional options `io.connect` will multiplex and have two connections
  socket = io.connect(url, _.assign({
    path: path,
    secure: true,
    reconnect: true,
    rejectUnauthorized: false,

    reconnectionAttempts: 3,
    query: {
      userId: userId,
      userName: userName,
    },
  }, configOptions));

  return socket;
};
/**
* determines if a connection was ever started
*
* @returns {Boolean}
*/
function isInitialized() {
  return !_.isNil(socket);
};
/**
* checks connection status
*
* @returns {Boolean}
*/
function isConnected() {
  return !_.isNil(socket) && socket.connected;
};
/**
* if connected once before and now disconnected, can be called this to reconnect
*/
function reconnect() {
  if (socket) {
    socket.io.reconnect();
  }
};
/**
* closes the connection
*/
function disconnect() {
  if (socket) {
    socket.close();
  }
};

// export object
const websocketManager = {
  isConnected,
  isInitialized,
  reconnect,
  disconnect,
  get socket() {
    return socket;
  },
};

export default websocketManager;
export {
  createConnection,

  isConnected,
  isInitialized,
  reconnect,
};
