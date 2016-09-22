const html = require('choo/html')

module.exports = (resort, { width, color, cx }) => {
  resort = resort || {}
  width = width || 100
  color = color || 'navy'
  cx = cx || ''

  const widthCx = `w-${width}-m w-${width}-l`

  return html`
    <div class='fl-m fl-l ${widthCx} ${cx}'>
      <div class='ba b--light-gray'>
        <div class='h5 bg-${color}' async-img='/${resort.slug}.jpg'>
          <div class='cf tr'>
            <p class='f-subheadline b bg-black-90 dib white pb2 mv0 pa3'>
              ${resort.snowfall24}"
            </p>
          </div>
        </div>
        <div class='cf bg-white pa3'>
          <div class='fl-l'>
            <a href='/resorts/${resort.slug}' class='link black'>
              <p class='f5 b mv0'>${resort.name}</p>
              <p class='f6 mid-gray mv0'>${resort.city}, ${resort.state}</p>
            </a>
          </div>
          <div class='fr-l ba b--light-gray br2'>
            <p class='f6 mid-gray b mv0 pa2 tc tl-m tl-l'>
              <span class='pa2 pr3'>
                ${resort.temp}° F
              </span>
              <span class='bl b--light-gray pl3 pa2'>
                ${resort.weather}
              </span>
            </p>
          </div>
        </div>
      </div>
      <script>${resort.slug && 'if (window.asyncImg) window.asyncImg()'}</script>
    </div>
  `
}
