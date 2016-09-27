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
      <div class='bg-blue white pa3 pa4-m pa5-l'>
        <div class='tc tl-m tl-l dt-m dt-l w-100'>
          <div class='dtc v-mid'>
            <span class='f-subheadline f-headline-m f-headline-l'>${weather(resort.weather)} ${resort.snowfall24}'</span>
          </div>
          <div class='dtc v-mid'>
            <div class='pv3 pv4-m pv5-l tr'>
              <dl>
                <dt>Morning</dt>
                <dd class='ml0'>${resort.temp}° F</dd>
              </dl>
              <dl>
                <dt>Afternoon</dt>
                <dd class='ml0'>${resort.temp + 5}</dd>
              </dl>
              <dl>
                <dt>Weather</dt>
                <dd class='ml0'>${resort.weather}</dd>
              </dl>
            </div>
          </div>
        </div>
      </div>
      <div class='bg-purple white pa3 pa4-m pa5-l'>
        <div class='tc tl-m tl-l dt-m dt-l w-100'>
          <div class='dtc v-mid'>
            <span class='f-subheadline'>☽</span>
          </div>
          <div class='dtc v-mid'>
            <div class='tr'>
              <p class='f-subheadline'>
                ${weather(resort.weather)} ${resort.temp - 12}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class='bg-near-white pa3 pa4-m pa5-l'>
        <div class='cf'>
          ♦♢ Rating
          📍 Location
          🌐 Website
        </div>
      </div>
    </main>
  `
}
