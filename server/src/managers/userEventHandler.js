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
};

export default handleUserEvents;
