# ≙ fc

__Work in progress__

First Chair is a quick and nimble snow tracking app for resorts and snotel sites.
This app is being built as an ongoing experiment with creating a performant and submersive app experience within a browser.
It is intended to use modern technology while still falling back gracefully for older browsers and others without js runtimes.

Developing for the browser is a unique experience. We're not afforded the convenience of a single "install" like native apps are.
As a result, I've focused on keeping the initial download of this app to 5KB (gzipped).
Hypothetically, this ensures that the primary payload for this app fits within a single packet.
In practice, this requires progressively enhancing the page after load and inlining critical path css.

Fast. Minimal. Tiny. Accessible.

I hope to have a proof of concept working in time to submit to [10k Apart](https://a-k-apart.com/).

#### Installation and usage

###### Install dependencies

```
npm i
```

###### Run production

```
npm start
```

###### Run the dev server

```
npm run serve:dev
```

###### Run uncss

When you have the development server running, run the following command in another tab:

```
npm i -g uncss
./scripts/css.sh
```

#### Todo

- [ ] a11y linting
- [ ] aria attributes
- [X] resort index page with state filtering
- [X] design resort page
- [ ] graph snowfall
- [ ] resort search feature
- [ ] resort favoriting
- [X] lazy load js
- [X] lazy load images
- [X] uncss
- [ ] transition between pages

#### Key features to its minimal nature

- choo (shoutout to yoshua and contributors)
- yo-yo
- tachyons
- micro
- uncss
- html entity logo
- server side rendering
- rehydration (shoutout to [dat.land](https://github.com/datproject/dat.land/blob/master/client/js/models/app-rehydrator.js))
- svgs
- lazily loaded, async js (but not required)
- async images (if js is supported)

#### Optional, progressive assets and enhancements

Everything that is needed for a great user experience is server rendered.
This allows a user to even use this application without javascript enabled.
When clicking links, they're simply forwarded to the next server rendered page.
All the things are minified and gzipped, too.

##### If javascript _is_ enabled, we turn it up a notch

Firstly, a tiny javascript is executed to grab the single page application js that was used to render the app on the server.
That js is then appended to the dom and executed.
This takes over navigation, only updating parts of the dom that have changed and fetching api requests in the background.
Additionally, the js begins to lazy load images and pop them into place.
These images are only shown lazily and if js is available.
They greatly improve the ux of First Chair, but are heavy and unneeded for a satisfactory experience.

#### Server

Currently the server handles rendering and returning html/json responses.
The data returned by the api is currently static as this is a poc for a-k-apart.
It will be tied into live data in the future.

It can be found at server.js.

#### Client

The client is a choo/tachyons single page app with SSR.
It features mostly vanilla JS built by browserify.
The payload is ~20kB, so it is asynchronously loaded after render.o

It can be found at client.js.

***

> Built with all the hearts by @4lpine
