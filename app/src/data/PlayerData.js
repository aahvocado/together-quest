// import uuid from 'node-uuid';

const playerSchema = {
  username: undefined,
  id: undefined,
  settings: {},
  email: undefined,
  password: null, // how to do this?
  campaigns: [],
  characters: [],
  modules: [],
};

const samplePlayer = {
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
  playerSchema,
  samplePlayer,
}
