const html = require('choo/html')
const weather = require('emojiweather')

module.exports = resort => (
  html`
    <li class='ml0 bb b--light-gray pa2 pa3-m pa4-l'>
      <div class='cf'>
        <div class='fl w-50 mt3'>
          <p class='f4 mt4'>
            ${resort.name} <br>
            <span class='f5 mid-gray'>${resort.city}</span>
          </p>
        </div>
        <div class='fl w-50 tr'>
          <p class='f1 tr'>
            ${resort.snowfall24}" ${weather(resort.weather)}
          </p>
        </div>
      </div>
    </li>
  `
)
