// import uuid from 'node-uuid';

const playerSchema = {
  username: undefined,
  id: undefined,
  email: undefined,
  password: null, // how to do this?
  campaigns: [],
  characters: [],
  settings: {},
};

const samplePlayer = {
  username: 'aahvocado',
  id: '000000001',
  email: 'dxiao.ns@gmail.com',
  password: 'password',
  campaigns: [
    'CAT-QUEST-ID',
  ],
  characters: [
    'DEMO-ID',
  ],
  settings: {},
};

export {
  playerSchema,
  samplePlayer,
}
