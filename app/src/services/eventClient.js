import store from 'data';

import SocketClient from 'components/SocketClient';

import { updateOtherUsers, resetOtherUsers } from 'data/actions';

// connect to websocket server
const client = new SocketClient({
  url: 'http://localhost:1111',
});

const socket = client.socket;
/**
 * generic connect
 */
socket.on('connect', () => {
  console.log('connected to websocket server!');
});
/**
 * users connected to server has changed, so we should cleanup
 */
client.listenTo('usersUpdate', (userDataList) => {
  resetOtherUsers();

  userDataList.forEach((userData) => {
    // don't add the user if it's this user
    if (userData.userId === store.getState().user.userId) return;

    updateOtherUsers(userData);
  })
});


socket.on('gameMasterData', (data) => {

});

export default client;
