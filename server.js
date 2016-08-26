const { send } = require('micro')
const app = require('./app')
const fs = require('fs')
const zlib = require('zlib')

const js = fs.readFileSync('dist/index.js', 'utf8')
const state = { resorts: require('./resorts.json') }

module.exports = async function (req, res) {
  console.log(req.url)

  if (req.url === '/index.js') {
    res.setHeader('Content-Encoding', 'gzip')
    res.setHeader('Content-Type', 'application/javascript')
    res.writeHead(200)

    res.end(zlib.gzipSync(js))
  } else if (req.url === '/resorts.json') {
    res.setHeader('Content-Type', 'application/json; charset=utf-8')
    send(res, 200, state)
  } else {
    res.setHeader('Content-Encoding', 'gzip')
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    res.writeHead(200)

    const html = `<div id="ssr">${app.toString(req.url, state)}</div><script async src="index.js"></script>`

    res.end(zlib.gzipSync(html))
  }
}
