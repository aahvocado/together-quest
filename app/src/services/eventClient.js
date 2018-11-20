import store from 'data';

import SocketClient from 'components/SocketClient';

import {
  addCharacter,
  updateOtherUsers,
  resetOtherUsers,
} from 'data/actions';

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
 *
 * @param {Array} userDataList
 */
client.listenTo('usersUpdate', (userDataList) => {
  resetOtherUsers();

  userDataList.forEach((userData) => {
    // don't add the user if it's this user
    if (userData.userId === store.getState().user.userId) return;

    updateOtherUsers(userData);
  })
});
/**
 * game master sent new data to update to
 *
 * @param {Object} attachedData - string of an object
 */
socket.on('updateCharacterData', (attachedData) => {
  // verify attachedData is an object, otherwise it is not valid
  if (typeof attachedData !== 'object') return;

  // can't do anything without a name/id
  if (!attachedData.name && !attachedData.id) return;

  // but otherwise it is all good
  addCharacter(attachedData);
});

export default client;
