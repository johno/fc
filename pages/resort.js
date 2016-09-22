const html = require('choo/html')

module.exports = (state, prev, send) => {
  const { params } = state
  const resort = state.resorts.find(r => r.slug === params.resort)

  return html`
    <main>
      <header class='pa2 pa3-m pa4-l bb b--light-gray'>
        <div class='dt'>
          <div class='dtc v-mid pr2'>
            <a href='/' class='f3 mid-gray link'><span class='lh-copy'>≙</span></a>
          </div>
          <div class='dtc v-mid pl2'>
            <span class='f5 pr1'>Resorts</span>
            <span class='gray'>/</span>
          </div>
          <div class='dtc v-mid pl2'>
            <span class='f5 pr1'>${resort.state}</span>
            <span class='gray'>/</span>
          </div>
          <div class='dtc v-mid pl2'>
            <span class='f5'>${resort.name}</span>
          </div>
        </div>
      </header>
    </main>
  `
}
