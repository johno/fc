const { send } = require('micro')
const app = require('./app')

const state = require('./resorts.json')

module.exports = async function (req, res) {
  send(res, 200, app.toString(req.url, state))
}
