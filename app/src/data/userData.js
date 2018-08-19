// import uuid from 'node-uuid';

const userSchema = {
  username: undefined,
  id: undefined,
  settings: {},
  email: undefined,
  password: null, // how to do this?
  campaigns: [],
  characters: [],
  modules: [],
};

const sampleUser = {
  username: 'aahvocado',
  id: '000000001',
  settings: {},
  email: 'dxiao.ns@gmail.com',
  password: 'password',
  campaigns: [
    'CAT-QUEST-ID',
  ],
  characters: [
    'DEMO-ID',
  ],
  modules: [],
};

export {
  userSchema,
  sampleUser,
}
