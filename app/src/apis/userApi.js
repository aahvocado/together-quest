import uuid from 'node-uuid';

import userData from 'data/userData';
import dynamoDB from 'services/dynamoDB';

const tableName = 'together-quest-user';
const primaryKey = 'userId';

async function createUser(data) {
  const { username, email } = data;

  const params = {
    TableName: tableName,
    HashKey: { [primaryKey]: uuid.v4() }
    Item: {
      username: username,
      email: email,
      password: '1',
      settings: {},
      campaigns: [],
      characters: [],
      modules: [],
    },

    ReturnValues: 'ALL_UPDATES',
  }

  return dynamoDB.put(params);
}

async function fetchUser(userId) {
  const params = {
    TableName: TableName,
    Key: { [primaryKey]: userId },
  };

  return dynamoDB.get(params);
}
