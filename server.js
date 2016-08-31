const { send } = require('micro')
const app = require('./app')
const fs = require('fs')
const zlib = require('zlib')

const isProd = process.env.NODE_ENV === 'production'
const cssFile = isProd ? 'assets/tachyons.un.css' : 'assets/tachyons.min.css'

const js = fs.readFileSync('dist/index.js', 'utf8')
const css = fs.readFileSync(cssFile, 'utf8')
const state = { resorts: require('./resorts.json') }

const bbImg = fs.readFileSync('assets/bridger-bowl.jpg')

module.exports = async function (req, res) {
  console.log(req.url)

  if (req.url === '/i.js') {
    res.setHeader('Content-Encoding', 'gzip')
    res.setHeader('Content-Type', 'application/javascript')
    res.writeHead(200)

    res.end(zlib.gzipSync(js))
  } else if(req.url === '/bridger-bowl.jpg') {
    res.setHeader('Content-Encoding', 'gzip')
    res.setHeader('Content-Type', 'image/jpg')
    res.writeHead(200)

    res.end(zlib.gzipSync(bbImg))
  } else if(req.url === '/tachyons.min.css') {
    res.setHeader('Content-Encoding', 'gzip')
    res.setHeader('Content-Type', 'text/css')
    res.writeHead(200)

    res.end(zlib.gzipSync(css))
  } else if (req.url === '/resorts.json') {
    res.setHeader('Content-Type', 'application/json; charset=utf-8')
    send(res, 200, state)
  } else {
    res.setHeader('Content-Encoding', 'gzip')
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    res.writeHead(200)

    const appHtml = html(app.toString(req.url, state), state, css)

    res.end(zlib.gzipSync(appHtml))
  }
}

const html = (app, state, css) => (`
  <!DOCTYPE html>
  <head>
    <title>First Chair</title>
    ${isProd ? `<style>${css}</style>` : `<link href="/tachyons.min.css" rel="stylesheet" />`}
  </head>
  <body>
    <div id="ssr">${app}</div>
    ${jsScript()}
    <script>
      window.rehydrationState = ${JSON.stringify(state)}

      window.asyncImg = () => {
        const asyncImgs = [].slice.call(document.querySelectorAll('[async-img]'))

        asyncImgs.forEach(el => {
          el.style = 'background: url(' + el.getAttribute('async-img') + ') no-repeat; background-size: cover;'
        })
      }
    </script>
`)

const jsScript = () => {
  if (isProd) {
    return `
    <script async async-js-src="/i.js"></script>
    <script>
      const jsScripts = [].slice.call(document.querySelectorAll('[async-js-src]'))
      jsScripts.forEach(el => {
        const tag = document.createElement('script')
        tag.src = el.getAttribute('async-js-src')
        document.body.appendChild(tag)
      })
    </script>
    `
  } else {
    return '<script async src="/i.js"></script>'
  }
}
