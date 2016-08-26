const choo = require('choo')
const app = choo()

app.model(require('./models/app'))

app.router((route) => [
  route('/', require('./pages/home')),
  route('/resorts/:resort', require('./pages/resort'))
])

module.exports = app
