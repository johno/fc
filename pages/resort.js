const html = require('choo/html')

module.exports = (state, prev, send) => {
  const { params } = state

  return html`
    <main>
      <link rel='stylesheet' href='https://npmcdn.com/tachyons@4.1.1/css/tachyons.min.css'/>
      <header class='pa2 pa3-m pa3-l bb b--light-gray'>
        <a href='/' class='f3 mid-gray link'>≙ <span class='f5'>Bridger Bowl</span></a>
      </header>

      ${params.resort}
    </main>
  `
}
