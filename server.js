const { send } = require('micro')
const app = require('./app')
const fs = require('fs')
const zlib = require('zlib')

const isProd = process.env.NODE_ENV === 'production'
const cssFile = isProd ? 'assets/tachyons.un.css' : 'assets/tachyons.min.css'

const js = fs.readFileSync('dist/index.js', 'utf8')
const css = fs.readFileSync(cssFile, 'utf8')
const state = { resorts: require('./resorts.json') }

module.exports = async function (req, res) {
  console.log(req.url)

  if (req.url === '/i.js') {
    res.setHeader('Content-Encoding', 'gzip')
    res.setHeader('Content-Type', 'application/javascript')
    res.writeHead(200)

    res.end(zlib.gzipSync(js))
  } else if(/\.jpg$/.test(req.url) || /\.png$/.test(req.url)) {
    res.setHeader('Content-Encoding', 'gzip')
    res.setHeader('Content-Type', 'image/jpg')
    res.writeHead(200)

    res.end(zlib.gzipSync(fs.readFileSync(`assets${req.url}`)))
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
    <title>First Chair - The new way to track snowfall</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="apple-touch-icon" sizes="57x57" href="/icons/apple-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="/icons/apple-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/icons/apple-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="/icons/apple-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/icons/apple-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="/icons/apple-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/icons/apple-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="/icons/apple-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-icon-180x180.png">
    <link rel="icon" type="image/png" sizes="192x192"  href="/icons/android-icon-192x192.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="96x96" href="/icons/favicon-96x96.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="msapplication-TileImage" content="/icons/ms-icon-144x144.png">
    <meta name="theme-color" content="#ffffff">
    ${isProd ? `<style>${css}</style>` : `<link href="/tachyons.min.css" rel="stylesheet" />`}
  </head>
  <body>
    <div id="ssr">${app}</div>
    ${jsScript()}
    <script type="text/javascript">
      window.rehydrationState = ${JSON.stringify(state)}

      window.asyncImg = () => {
        const asyncImgs = [].slice.call(document.querySelectorAll('[async-img]'))

        asyncImgs.forEach(el => {
          el.style.cssText = 'background: url(' + el.getAttribute('async-img') + ') no-repeat; background-size: cover;'
        })
      }
    </script>
`)

const jsScript = () => {
  if (isProd) {
    return `
    <meta async-js-src="/i.js">
    <script type="text/javascript">
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
