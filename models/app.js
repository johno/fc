module.exports = {
  state: {
    resorts: []
  },

  reducers: {
    update: (action, state) => ({ resorts: action })
  },

  effects: {
  },

  subscriptions: [
    send => {
      const resorts = window.rehydrationState && window.rehydrationState.resorts
      send('update', resorts, err => err && console.error(err))
    }
  ]
}

