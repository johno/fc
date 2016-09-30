const html = require('choo/html')
const titleize = require('titleize')
const item = require('../elements/resort-list-item')

module.exports = (state, prev, send) => {
  const { params } = state
  const selectedState = params.state && params.state.toLowerCase()

  console.log(selectedState)
  const resorts = state.resorts.filter(r => {
    return selectedState ? r.state.toLowerCase() === selectedState : true
  })

  console.log(resorts)
  return html`
    <main>
      <header class='pa2 pa3-m pa4-l bb b--light-gray'>
        <div class='dt'>
          <div class='dtc v-mid pr2'>
            <a href='/' class='f3 mid-gray link'><span class='lh-copy'>≙</span></a>
          </div>
          <div class='dtc v-mid pl2'>
            <a href='/resorts' class='f5 black link pr1'>Resorts</a>
            <span class='gray'>/</span>
          </div>
          <div class='dtc v-mid pl2'>
            <span class='f5 pr1'>
              ${titleize(params.state || 'all')}
            </span>
          </div>
        </div>
      </header>
      <ul class='list pl0 mt0'>
        ${resorts.map(item)}
      </ul>
    </main>
  `
}
