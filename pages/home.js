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
			</div>
		</div>
		<footer class='bt b--light-gray bg-black-05 pa3 pa6-m pa6-l tc mid-gray'>
			firstchair.io
		</footer>
  </main>
`
