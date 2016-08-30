module.exports = {
  state: {
    resorts: []
  },

  reducers: {
    update: (action, state) => ({ resorts: action })
  },

  effects: {
    // asynchronous operations that don't modify state directly.
    // Triggered by actions, can call actions. Signature of (data, state, send, done)
    /*
    myEffect: (data, state, send, done) => {
      // do stuff
    }
    */
  },

  subscriptions: [
    send => {
      if (!window.rehydrationState) return
      const resorts = window.rehydrationState.resorts
      send('update', resorts, err => err && console.error(err))
    }
  ]
}

