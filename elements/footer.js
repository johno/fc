const html = require('choo/html')

module.exports = () => {
  return html`
    <footer class='bt b--light-gray bg-black-05 pa3 pa4-m pa4-l mid-gray pb5'>
      <div class='cf pb4'>
        <div class='fl-m fl-l w-60-m w-60-l h4 pt3 pb4'>
          <p class='measure-narrow lh-copy f4'>
            First Chair is about discovery and tracking snowfall, not ads
          </p>
          <p class='measure lh-copy f6 mv0'>
            Crafted with hearts by <a href="http://johnotander.com" class="link black dim">John Otander</a>
          </p>
        </div>
        <div class='fl-m fl-l w-40-m w-40-l tc'>
          <span class='f-headline lh-solid'>≙</span>
          <p class='mv0'>The new way to track snowfall</p>
        </div>
      </div>
    </footer>
  `
}
