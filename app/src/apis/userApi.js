import uuid from 'uuid/v4';

import userData from 'data/userData';
import dynamoDB from 'services/dynamoDB';

const tableName = 'together-quest-user';
const primaryKey = 'userId';

const createUser = async (data) => {
  const { username, email } = data;

  const newId = uuid();
  const params = {
    TableName: tableName,
    Key: { [primaryKey]: newId },
    Item: {
      [primaryKey]: newId,
      username: username,
      email: email,
      password: '1',
      settings: {},
      campaigns: [],
      characters: [],
      // modules: [],
    },
  }

  await dynamoDB.put(params);

  // since `PUT` returns nothing we'll manually return the item
  return params.Item;
}

const fetchUser = async (userId) => {
  const params = {
    TableName: tableName,
    Key: { [primaryKey]: userId },
  };

  return dynamoDB.get(params);
}

// export
const userApi = {
  createUser,
  fetchUser,
};

export default userApi;
