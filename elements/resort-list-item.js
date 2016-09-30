const html = require('choo/html')

module.exports = resort => (
  html`
    <li class='ml0 bb b--light-gray pa2 pa3-m pa4-l'>
      <div class='cf'>
        <div class='fl w-50 mt3'>
          <p class='f4 mt4'>
            <a href='/resorts/${resort.slug}' class='black link dim' title='${resort.name}'>
              ${resort.name} <br>
              <span class='f5 mid-gray'>${resort.city}</span><br>
              <span class='f5 mid-gray'>
                ${resort.temp}° F and ${resort.weather}
              </span>
            </a>
          </p>
        </div>
        <div class='fl w-50 tr'>
          <p class='f1 tr'>
            ${resort.snowfall24}"
          </p>
        </div>
      </div>
    </li>
  `
)
