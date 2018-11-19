import Server from 'socket.io';
import handleUserEvents from 'managers/userEventHandler';

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
    this.use(this.handshake.bind(this));

    // {'socket.id': Client}
    this.clients = {};
  };
  /**
   * starts a generic server and handle generic events
   */
   start() {
    // listen to when a client connects
    this.on('connection', (socket) => {
      const userClient = this.clients[socket.id];
      console.log('[SocketServer] Client Connected');

      // when user connects, send everybody all users's data
      this.emit('connected', this.getAllUserData());

      // user events
      handleUserEvents(socket);

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
    this.clients[socketId] = socket;

    const query = socket.handshake.query;
    socket.userData = {
      username: query.username,
      userId: query.userId, // todo
    };

    return next();
  }
  /**
   * @param {Number} socketId
   */
  removeClient(socketId) {
    delete this.clients[socketId]
  }
  /**
   * simplifies getting the number of clients connected to this server
   *
   * @returns {Number}
   */
  get clientsCount() {
    return this.engine.clientsCount;
  }
  /**
   * all socket.userData
   *
   * @returns {Array}
   */
  getAllUserData() {
    const socketIdList = Object.keys(this.clients);
    return socketIdList.map((socketId) => {
      return this.clients[socketId].userData;
    })
  }
};

export default SocketServer;
