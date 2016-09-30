const html = require('choo/html')

module.exports = (resort, { width, color, cx }) => {
  resort = resort || {}
  width = width || 100
  color = color || 'navy'
  cx = cx || ''

  const widthCx = `w-${width}-l`

  return html`
    <div class='fl-l ${widthCx} ${cx} br2' aria-gridcell="true">
      <div class='ba b--light-gray br2'>
        <a href='/resorts/${resort.slug}' title='${resort.name}'>
          <div class='h5 bg-${color} br2 br--top' async-img='/${resort.slug}.jpg'>
            <div class='cf tr'>
              <p class='f1 b bg-gray dib white pb2 mv0 pa3 br2 br--top' style='border-top-left-radius: 0;'>
                ${resort.snowfall24}"
              </p>
            </div>
          </div>
        </a>
        <div class='dt w-100 bb b--light-gray bg-near-white black'>
          <span class='dtc w-33 tc pa3'>
            ${resort.snowfall24}"
          </span>
          <span class='dtc w-33 tc pa3'>
            ${resort.temp}° F
          </span>
          <span class='dtc w-34 tc pa3 ttu f6'>
            ${resort.weather}
          </span>
        </div>
        <div class='bg-white pa3 br2 br--bottom black'>
          <p class='f5 b mv0'>
            <a href='/resorts/${resort.slug}' class='link black dim'>${resort.name}</a>
          </p>
          <p class='f6 mv0'>
            <a href='/resorts/${resort.slug}' class='link mid-gray dim'>${resort.city}, ${resort.state}</a>
          </p>
        </div>
        <script>${resort.slug && 'if (window.asyncImg) window.asyncImg()'}</script>
      </div>
    </div>
  `
}
