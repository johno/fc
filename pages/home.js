const html = require('choo/html')

const resortTile = require('../elements/resort-tile')

module.exports = (state, prev, send) => {
  return html`
    <main>
      <header class='tc pv2 pv4-m pv4-l bb b--light-gray'>
        <span class='f-subheadline mid-gray'>≙</span>
        <h1 class='f3 mid-gray'>First Chair</h1>
        <h2 class='f4 mid-gray normal'>The new way to track snowfall</h2>
      </header>
      <div class='bg-washed-blue'>
        <div class='pa2 mw8 center'>
          <h3 class='f5 ttu tracked normal'>Featured</h3>
          <div class='cf'>
            ${resortTile(state.resorts[0], { width: 60 })}
            ${resortTile(state.resorts[1], { width: 40, color: 'dark-blue', cx: 'pl2' })}
          </div>
          <div class='cf pt2'>
            ${resortTile(state.resorts[0], { width: 33, color: 'blue' })}
            ${resortTile(state.resorts[0], { width: 33, color: 'light-blue', cx: 'pl2'})}
            ${resortTile(state.resorts[0], { width: 34, color: 'lightest-blue', cx: 'pl2' })}
          </div>
        </div>
      </div>
      <footer class='bt b--light-gray bg-black-05 pa3 pa6-m pa6-l tc mid-gray'>
        firstchair.io
      </footer>
    </main>
  `
}
