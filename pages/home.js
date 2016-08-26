const html = require('choo/html')

module.exports = (state, prev, send) => {
  console.log(state)
  const featuredResort = state.resorts[0]
  console.log(featuredResort)

  return html`
    <main>
      <link rel='stylesheet' href='https://npmcdn.com/tachyons@4.1.1/css/tachyons.min.css'/>
      <header class='tc pv2 pv4-m pv4-l bb b--light-gray'>
        <span class='f-subheadline mid-gray'>≙</span>
        <h1 class='f3 mid-gray'>First Chair</h1>
        <h2 class='f4 mid-gray normal'>The new way to track snowfall</h2>
      </header>
      <div class='bg-washed-blue'>
        <div class='pa2 mw8 center'>
          <h3 class='f5 ttu tracked normal'>Featured</h3>
          <div class='cf'>
            <div class='fl w-60 ba b--light-gray'>
              <div class='h5 bg-navy'>
                <div class='cf white'>
                  <div class='tr'>
                    <p class='f-subheadline b pb2 mv0 pa3'>
                      ${featuredResort.snowfall24}"
                    </p>
                  </div>
                </div>
              </div>
              <div class='cf bg-white pa3'>
                <div class='fl-m fl-l'>
                  <a href='/resorts/bridger-bowl' class='link'>
                    <p class='f5 b mv0'>${featuredResort.name}</p>
                    <p class='f6 mid-gray mv0'>${featuredResort.city}, ${featuredResort.state}</p>
                  </a>
                </div>
                <div class='fr-m fr-l ba b--light-gray br2'>
                  <p class='f6 mid-gray b mv0 pa2 tc tl-m tl-l'>
                    <span class='pa2 pr3'>
                      ${featuredResort.temp}° F
                    </span>
                    <span class='bl b--light-gray pl3 pa2'>
                      ${featuredResort.weather}
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div class='fl w-40 pl2'>
              <div class='ba b--light-gray'>
                <div class='h5 bg-dark-blue'>
                  <div class='cf white'>
                    <div class='tr'>
                      <p class='f-subheadline b pb2 mv0 pa3'>3"</p>
                    </div>
                  </div>
                </div>
                <div class='bg-white pa3'>
                  <p class='f5 b mv0'>Bridger Bowl</p>
                  <p class='f6 mid-gray mv0'>Bozeman, MT</p>
                </div>
              </div>
            </div>
          </div>
          <div class='cf pt2'>
            <div class='fl w-33 pr2'>
              <div class='ba b--light-gray'>
                <div class='h5 bg-blue'>
                  <div class='cf white'>
                    <div class='tr'>
                      <p class='f-subheadline b pb2 mv0 pa3'>3"</p>
                    </div>
                  </div>
                </div>
                <div class='bg-white pa3'>
                  <p class='f5 b mv0'>Bridger Bowl</p>
                  <p class='f6 mid-gray mv0'>Bozeman, MT</p>
                </div>
              </div>
            </div>
            <div class='fl w-33 pr2'>
              <div>
                <div class='h5 bg-light-blue'>
                  <div class='cf black'>
                    <div class='tr'>
                      <p class='f-subheadline b pb2 mv0 pa3'>3"</p>
                    </div>
                  </div>
                </div>
                <div class='bg-white pa3 ba b--light-gray'>
                  <p class='f5 b mv0'>Bridger Bowl</p>
                  <p class='f6 mid-gray mv0'>Bozeman, MT</p>
                </div>
              </div>
            </div>
            <div class='fl w-34'>
              <div class='h5 bg-lightest-blue'>
                <div class='cf black'>
                  <div class='tr'>
                    <p class='f-subheadline b pb2 mv0 pa3'>3"</p>
                  </div>
                </div>
              </div>
              <div class='bg-white pa3 ba b--light-gray'>
                <p class='f5 b mv0'>Bridger Bowl</p>
                <p class='f6 mid-gray mv0'>Bozeman, MT</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer class='bt b--light-gray bg-black-05 pa3 pa6-m pa6-l tc mid-gray'>
        firstchair.io
      </footer>
    </main>
  `
}
