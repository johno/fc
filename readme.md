# ≙ fc [![built with choo v3](https://img.shields.io/badge/built%20with%20choo-v3-ffc3e4.svg?style=flat-square)](https://github.com/yoshuawuyts/choo)

First Chair is a quick and nimble snow tracking app for resorts and snotel sites.

#### Key features to its minimal nature

- choo
- tachyons
- micro
- uncss
- html entity logo
- server side rendering
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
