import Server from 'socket.io';

/**
 * Extends `socket.io-server` to add some helpful methods and keep track of unique Clients.
 *
 * @link https://github.com/socketio/socket.io/blob/master/lib/index.js
 * @extends socket.io Server
 */
class SocketServer extends Server {
  /**
   * Sets up the Server to use the custom handshake so we can track unique users.
   *
   * @param {Object} server
   */
  constructor(server) {
    super(server);

    // {'socket.id': Client}
    this.myClients = {};
  };
  /**
   * starts a generic server and handle generic events
   */
   start() {
    // listen to when a client connects
    this.on('connection', (socket) => {
      const userClient = this.myClients[socket.id];
      console.log('[SocketServer] Client Connected');

      /**
       * Client gets disconnected from server
       */
      socket.on('disconnect', () => {
        this.removeClient(socket.id);
      });
    });
  }
  /**
   * intercepts new connections to keep track of them in cache
   *
   * @override
   * @param {Socket} socket
   * @param {Function} next
   */
  handshake(socket, next) {
    // create a client based on a unique id per connection, then track it
    const socketId = socket.id;
    this.myClients[socketId] = socket;

    return next();
  }
  /**
   * @param {Number} socketId
   */
  removeClient(socketId) {
    delete this.myClients[socketId]
  }
  /**
   * simplifies getting the number of clients connected to this server
   *
   * @returns {Number}
   */
  get clientsCount() {
    return this.engine.clientsCount;
  }
};

export default SocketServer;
