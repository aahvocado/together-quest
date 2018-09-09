const campaignSchema = {
  title: undefined,
  campaignId: undefined,
  players: [],
  modules: [],
};

// constants
const constants = {
  UPDATE_TITLE: 'UPDATE_TITLE',
  UPDATE_PLAYERS: 'UPDATE_PLAYERS',
  UPDATE_MODULES: 'UPDATE_MODULES',
};

// actions
const updateTitle = (data) => ({
  type: constants.UPDATE_TITLE,
  data: data,
});
const updatePlayers = (data) => ({
  type: constants.UPDATE_PLAYERS,
  data: data,
});
const updateModules = (data) => ({
  type: constants.UPDATE_MODULES,
  data: data,
});

// reducers
const campaignDataReducer = (state = {}, { type, data }) => {
  switch (type) {
    case constants.UPDATE_TITLE:
    case constants.UPDATE_PLAYERS:
    case constants.UPDATE_MODULES:
      return Object.assign({}, state, data || {});

    default:
      return state;
  }
};

// combined
const userData = {
  constants: constants,
  actions: {
    updateTitle,
    updatePlayers,
    updateModules,
  },
  defaultState: Object.assign({}, campaignSchema, {

  }),
  reducer: campaignDataReducer,
};

export default campaignData;

export {
  campaignSchema,
};
