import {io} from 'managers/serverManager';

/**
 * wrapper around the socket from the client
 */
function handleUserEvents(socket) {
  /**
   * user has given their info and officially joined, pass it out
   */
  socket.on('join', (data) => {
    socket.emit('joined', data);
  });
};

export default handleUserEvents;
