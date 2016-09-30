const html = require('choo/html')
const weather = require('emojiweather')

const footer = require('../elements/footer')

module.exports = (state, prev, send) => {
  const { params } = state
  const resort = state.resorts.find(r => r.slug === params.resort)

  return html`
    <main role='main'>
      <header class='pa2 pa3-m pa4-l bb b--light-gray'>
        <div class='dt' aria-menu='true'>
          <div class='dtc v-mid pr2' aria-menuitem='true'>
            <a href='/' class='f3 mid-gray link'><span class='lh-copy'>≙</span></a>
          </div>
          <div class='dtc v-mid pl2' aria-menuitem='true'>
            <a href='/all/' class='f5 black link pr1'>Resorts</a>
            <span class='gray' aria-separator='true'>/</span>
          </div>
          <div class='dtc v-mid pl2' aria-menuitem='true'>
            <span class='f5 pr1'><a href='/states/${resort.state.toLowerCase()}' class='black link'>${resort.state}</a></span>
            <span class='gray' aria-separator='true'>/</span>
          </div>
          <div class='dtc v-mid pl2'>
            <span class='f5'>${resort.name}</span>
          </div>
        </div>
      </header>
      <div class='pa3 pa4-m pa5-l'>
        <div class='dt-m dt-l w-100'>
          <article class='db dtc-m dtc-l v-mid'>
            <p class='f1 f-subheadline-m f-subheadline-l b lh-copy measure mv0'>
              Epic!
            </p>
            <p class='f2 f1-m f1-l lh-copy measure-narrow'>
              There's about <span class="dark-blue b">${resort.snowfall24}"</span> of fresh snow with <span class="dark-blue b">${resort.snowfall72}"</span> in the last 72 hours.
            </p>
            <p class='f2 f1-m f1-l lh-copy measure-narrow'>
              It's ${weather(resort.weather)} ${resort.weather}.
            </p>
          </p>
        </article>
      </div>
      <article class='cf'>
        <div class='bg-washed-blue fl-m fl-l w-50-m w-25-l dark-blue tc pv3 pv4-m pv4-l'>
          <p class='f2 mb0'>
            ${weather(resort.city)}<br>
            <span class='f5 ttu tracked'>3 day forecast</span>
          </p>
          <p class='f1'>☃</p>
        </div>
        <div class='fl-m fl-l w-50-m w-25-l bg-dark-blue white tc pv3 pv4-m pv4-l'>
          <p class='f2 mb0'>
            ${weather(resort.weather)}<br>
            <span class='f5 ttu tracked'>${resort.weather}</span>
          </p>
          <p class='f1'>${resort.temp}° F</p>
        </div>
        <div class='fl-m fl-l w-50-m w-25-l bg-blue white tc pv3 pv4-m pv4-l'>
          <p class='f2 mb0'>
            ${weather('snow')}<br>
            <span class='f5 ttu tracked'>Snow</span>
          </p>
          <p class='f1'>-2° F</p>
        </div>
        <div class='fl-m fl-l w-50-m w-25-l bg-light-blue white tc pv3 pv4-m pv4-l'>
          <p class='f2 mb0'>
            ${weather('cloudy')}<br>
            <span class='f5 ttu tracked'>Cloudy</span>
          </p>
          <p class='f1'>8° F</p>
        </div>
      </article>
      <div class='pa4 tc'>
        <a href='${resort.map}' class='ttu tracked pv3 ph4 mid-gray br2 ba b--light-gray link hover-bg-near-white dtc dib-m dib-l'>Map</a> <br class="dn-m dn-l">
        <a href='/states/${resort.state.toLowerCase()}' class='ttu tracked pv3 ph4 mid-gray br2 ba b--light-gray link hover-bg-near-white dtc dib-m dib-l'>${resort.state}</a>
      </div>
      ${footer()}
    </main>
  `
}
