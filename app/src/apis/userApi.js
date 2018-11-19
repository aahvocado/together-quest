import uuid from 'uuid/v4';

import { updateCredentials } from 'data/actions';

import dynamoDB from 'services/dynamoDB';

const tableName = 'together-quest-user';
const primaryKey = 'userId';
/**
 *
 */
const createUser = async (data) => {
  const { username, email } = data;
  const newId = uuid();

  const item = {
    [primaryKey]: newId,
    username: username,
    email: email,
    password: '1',
    settings: {},
    campaigns: [],
    characters: [],
    modules: [],
  }

  // const params = {
  //   TableName: tableName,
  //   Key: { [primaryKey]: newId },
  //   Item: item,
  // };

  // await dynamoDB.put(params);

  // update app state
  updateCredentials(item);

  // since `PUT` returns nothing we'll manually return the item
  return item;
};
/**
 *
 */
const fetchUser = async (userId) => {
  const params = {
    TableName: tableName,
    Key: { [primaryKey]: userId },
  };

  return dynamoDB.get(params);
};

// export
const userApi = {
  createUser,
  fetchUser,
};

export default userApi;
