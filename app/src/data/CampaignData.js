const campaignSchema = {
  title: undefined,
  id: undefined,
  players: [],
  modules: [],
};

const sampleCampaign = {
  title: 'Cat Quest',
  id: 'CAT-QUEST-ID',
  players: ['BLINKS-ID', 'NOOK-ID', 'PEARL-ID', 'DOUGLAS-ID'],
  modules: ['CAT-QUEST-MODULE-ID']
};

export {
  campaignSchema,
  sampleCampaign,
}
