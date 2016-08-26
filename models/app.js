module.exports = {
  state: {
    resorts: [{
      "slug": "bridger-bowl",
      "name": "Bridger Bowl",
      "city": "Bozeman",
      "state": "Montana",
      "snowfall24": "3",
      "snowfall72": "8",
      "temp": "7",
      "weather": "Sunny"
      }]
  },
  reducers: {
    /* synchronous operations that modify state. Triggered by actions. Signature of (data, state). */
    update: (action, state) => ({ title: action.value })
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
    // asynchronous read-only operations that don't modify state directly.
    // Can call actions. Signature of (send, done).
    /*
    (send, done) => {
      // do stuff
    }
    */
  ]
}

