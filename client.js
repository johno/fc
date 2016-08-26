const app = require('./app')
const tree = app.start()

const ssrDom = document.getElementById('ssr')
ssrDom && ssrDom.parentNode && ssrDom.parentNode.removeChild(ssrDom)
document.body.appendChild(tree)
