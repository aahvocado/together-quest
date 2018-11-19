import _ from 'lodash';
import store from 'data';

import websocketManager, {createConnection} from 'services/websocketManager';

/**
* SocketClient class implements helpful functions to manage a feature using WebSockets
* - add events onto the existing websocket connection
* - helps with sub/pub methods that communicate with EventApp
*
* @see Implementation Documentation - https://chromeriver.atlassian.net/wiki/x/eoDsGQ
* @link https://socket.io/docs/client-api/
*/
class SocketClient {
  /**
  * @type {Socket.IO-Client}
  */
  socket = null;
  /**
  * list of channels this Client is subscribed to
  * @type {Array<String>}
  */
  subscriptions = [];
  /**
  * cached list of functions to aid unlistening
  * @type {Array<Functions>}
  */
  unlistenEvents = [];
  /** @default */
  constructor() {
    // start up a connection if it was never started before
    if (!websocketManager.isInitialized()) {
      const state = store.getState();

      createConnection({
        url: 'localhost:1111',
        query: {
          username: state.user.username,
          userId: state.user.userId,
        },
      });

    // try to reconnect since this feature uses it
    } else if (!websocketManager.isConnected()) {
      websocketManager.reconnect();
    };

    // cache current socket
    this.socket = websocketManager.socket;
  };
  /**
  * listens to an event while also building the function to stop listening to the event
  *
  * @example
  * const unlisten = Client.listenTo('expense', (msg) => { console.log(msg) };
  * unlisten();
  *
  * @param {String} event
  * @param {Function} callback
  * @returns {Function} returns the function to stop listening
  */
  listenTo(event, callback) {
    this.socket.on(event, callback);

    // returns a function that you can call to unlisten to the event
    const unlisten = () => {
      this.socket.off(event, callback);
    };

    this.unlistenEvents.push(unlisten);
    return unlisten;
  };
  /**
  * remove all custom events added using the `listenTo()` function
  */
  removeListeners() {
    this.unlistenEvents.forEach((unlisten) => {
      unlisten();
    });

    this.unlistenEvents = [];
  };
  /**
  * handles sending the Server a list of Channels we want to watch for changes in
  *
  * @param {Array<String>} channelList
  * @param {Function} [callback]
  */
  async subscribe(channelList, callback) {
    this.socket.emit('subscribe', channelList);

    this.subscriptions = this.subscriptions.concat(channelList);

    if (callback) {
      this.socket.once('subscribed', callback);
    };
  }
  /**
  * stop receiving any messages from a Channel
  *
  * @param {Array<String>} channelList
  * @param {Function} [callback]
  */
  async unsubscribe(channelList, callback) {
    this.socket.emit('unsubscribe', channelList);

    this.subscriptions = _.difference(this.subscriptions, channelList);

    if (callback) {
      this.socket.once('unsubscribed', callback);
    };
  }
  /**
  * unsubscribe from all currently subscribed channels (for this Client)
  *
  * @param {Function} [callback]
  */
  async unsubscribeFromAll(callback) {
    this.unsubscribe(this.subscriptions, callback);
    this.subscriptions = [];
  }
  /**
  * basic message sending to all subscribed channels
  *  you can use `to()` to specify channels
  *
  * @example Client.emit('favorite_team', 'expense');
  *
  * @param {String} event
  * @param {[*]} messages
  */
  emit(event = 'message', ...messages) {
    this.emitHandler(event, event, undefined, ...messages);
  }
  /**
  * emit an 'update' event but record a different `lastEvent` on the db
  *
  * @param {String} event
  * @param {[*]} messages
  */
  emitUpdate(event = 'update', ...messages) {
    this.emitHandler('update', event, undefined, ...messages);
  }
  /**
  * under the hood, this is the final method that creates the payload for emitting to the server
  * @private
  *
  * @param {String} emitEvent - actual event to send to server
  * @param {String} event - event we will be emitting to others
  * @param {Array} channels - which channels to emit to
  * @param {[*]} messages - resulting data that other listeneres will receive
  */
  emitHandler(emitEvent, event, channels, ...messages) {
    this.socket.emit(emitEvent, {
      event: event,
      channels: channels,
      messages: messages,
    });
  }
  /**
  * emulate socket.io's emitter structure for the server,
  * (noting that websocket clients normally can't do this)
  * @link https://socket.io/docs/emit-cheatsheet/
  *
  * @example Client.to('channel1').to('channel2').emit('joke', 'knock knock');
  *
  * @param {String} channel
  * @param {Array} [channels]
  * @returns {Object} - object with chainable functions
  */
  to(channel, channels = []) {
    channels.push(channel);

    return {
      to: (anotherChannel) => {
        return this.to(anotherChannel, channels);
      },
      emit: (event, ...messages) => {
        return this.emitHandler(event, event, channels, ...messages);
      },
      emitUpdate: (event, ...messages) => {
        return this.emitHandler('update', event, channels, ...messages);
      },
    };
  }
  /**
  * unsubscribes and removes listeners all listeners for this feature
  */
  cleanup() {
    this.unsubscribeFromAll();
    this.removeListeners();
  }
};

export default SocketClient;
