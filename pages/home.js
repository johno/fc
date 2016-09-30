const html = require('choo/html')

const footer = require('../elements/footer')
const resortTile = require('../elements/resort-tile')

module.exports = (state, prev, send) => {
  return html`
    <main role="main">
      <header class='tc pv2 pv4-m pv4-l bb b--light-gray'>
        <span class='f-subheadline mid-gray'>≙</span>
        <h1 class='f3 mid-gray'>First Chair</h1>
        <h2 class='f4 mid-gray normal'>The new way to track snowfall</h2>
      </header>
      <div class='pa2 mw8 center' aria-grid="true">
        <h3 class='f5 ttu tracked normal ph2 ph4-m'>Featured</h3>
        <div class='cf ph2 ph4-m'>
          ${resortTile(state.resorts[0], { width: 60 })}
          ${resortTile(state.resorts[1], { width: 40, color: 'dark-blue', cx: 'pl3-l pt3 pt0-l' })}
        </div>
        <div class='cf pv3 ph2 ph4-m'>
          ${resortTile(state.resorts[2], { width: 33, color: 'blue' })}
          ${resortTile(state.resorts[3], { width: 33, color: 'light-blue', cx: 'pl3-l pt3 pt0-l'})}
          ${resortTile(state.resorts[4], { width: 34, color: 'lightest-blue', cx: 'pl3-l pt3 pt0-l' })}
        </div>
      </div>
      <div class='pa4 tc pb3 h4'>
        <a href='/resorts' class='ttu tracked pv3 ph4 mid-gray br2 ba b--light-gray link hover-bg-near-white'>Discover More</a>
      </div>
      ${footer()}
    </main>
  `
}
