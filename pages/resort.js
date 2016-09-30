const html = require('choo/html')
const weather = require('emojiweather')

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
            <a href='/all/' class='f5 black link pr1'>Resorts</a>
            <span class='gray'>/</span>
          </div>
          <div class='dtc v-mid pl2'>
            <span class='f5 pr1'><a href='/states/${resort.state.toLowerCase()}' class='black link'>${resort.state}</a></span>
            <span class='gray'>/</span>
          </div>
          <div class='dtc v-mid pl2'>
            <span class='f5'>${resort.name}</span>
          </div>
        </div>
      </header>
      <div class='bg-washed-blue pa3 pa4-m pa5-l'>
        <div class='tc tl-m tl-l dt-m dt-l w-100'>
          <div class='db dtc-m dtc-l v-mid'>
            <span class='f-subheadline f-headline-m f-headline-l b'>
              ${weather(resort.weather)} ${resort.snowfall24}'
            </span>
          </div>
          <div class='db dtc-m dtc-l v-mid'>
          </div>
        </div>
      </div>
      <div class='cf'>
        <div class='fl-m fl-l w-50-m w-25-l dark-blue tc'>
          <p class='ttu mb0 mt5 b'>Bozeman</p>
          <h6>Montana</h6>
        </div>
        <div class='fl-m fl-l w-50-m w-25-l bg-dark-blue white tc'>
          <p class='f2 mb0'>${weather(resort.weather)}</p>
          <p class='f1'>${resort.temp}° F</p>
        </div>
        <div class='fl-m fl-l w-50-m w-25-l bg-blue white tc'>
          <p class='f2 mb0'>${weather(resort.weather)}</p>
          <p class='f1'>${resort.temp}° F</p>
        </div>
        <div class='fl-m fl-l w-50-m w-25-l bg-light-blue white tc'>
          <p class='f2 mb0'>${weather(resort.weather)}</p>
          <p class='f1'>${resort.temp}° F</p>
        </div>
      </div>
      <div class='pv3 pv4-m pv5-l ph2'>
        <div class='measure-wide center'>
          
        </div>
      </div>
      <div class='bg-near-white pa3 pa4-m pa5-l'>
        <div class='cf'>
          ♦♢ Rating
          📍 Location
          🌐 Website
        </div>
      </div>
      <div class='pa4 tc pb3 h4'>
        <a href='/states/${resort.state.toLowerCase()}' class='ttu tracked pv3 ph4 mid-gray br2 ba b--light-gray link hover-bg-near-white'>More from ${resort.state}</a>
      </div>
    </main>
  `
}
