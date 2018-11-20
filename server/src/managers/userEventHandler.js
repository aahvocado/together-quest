import _ from 'lodash';

import {io} from 'managers/serverManager';

/**
 * wrapper around the socket from the client
 */
function handleUserEvents(socket) {
  /**
   * user has given their info and officially joined, pass it out
   */
  socket.on('join', (message) => {
    _.assignIn(socket.userData, message.data[0]);

    io.emit('usersUpdate', io.getAllUserData());
  });
  /**
   * user has given their info and officially joined, pass it out
   */
  socket.on('sendCharacterData', (message) => {
    const toSocketId = message.data[0];
    const attachedData = message.data[1];

    const toClient = io.clients[toSocketId];
    toClient.emit('updateCharacterData', attachedData);
  });

};

export default handleUserEvents;
