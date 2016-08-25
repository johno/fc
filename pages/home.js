const html = require('choo/html')

module.exports = (state, prev, send) => html`
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
					<div class='fl w-60 ba b--light-gray br2 bg-gray'>
            <div class=''>
              <div class='cf white'>
                <div class='tr'>
                  <p class='f1 f-subheadline-m f-subheadline-l b mt0 pa2'>3"</p>
                </div>
              </div>
              <div class='bg-white pa3 br2 br--bottom'>
                <p class='f5 b mv0'>Bridger Bowl</p>
                <p class='f6 mid-gray mv0'>Bozeman, MT</p>
              </div>
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
