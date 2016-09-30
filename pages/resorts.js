const html = require('choo/html')
const titleize = require('titleize')

const item = require('../elements/resort-list-item')
const footer = require('../elements/footer')

module.exports = (state, prev, send) => {
  const { params } = state
  const selectedState = params.state && params.state.toLowerCase()

  const resorts = state.resorts.filter(r => selectedState ? r.state.toLowerCase() === selectedState : true)

  return html`
    <main role='main'>
      <header class='pa2 pa3-m pa4-l bb b--light-gray'>
        <div class='dt' aria-menu='true'>
          <div class='dtc v-mid pr2'i aria-menuitem='true'>
            <a href='/' class='f3 mid-gray link'><span class='lh-copy'>≙</span></a>
          </div>
          <div class='dtc v-mid pl2' aria-menuitem='true'>
            <a href='/resorts' class='f5 black link pr1'>Resorts</a>
            <span class='gray' aria-separator='true'>/</span>
          </div>
          <div class='dtc v-mid pl2' aria-menuitem='true'>
            <span class='f5 pr1'>
              ${titleize(params.state || 'all')}
            </span>
          </div>
        </div>
      </header>
      <ul class='list pl0 mt0' aria-list='true'>
        ${resorts.map(item)}
      </ul>
      ${footer()}
    </main>
  `
}
