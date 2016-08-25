# ≙ fc [![built with choo v3](https://img.shields.io/badge/built%20with%20choo-v3-ffc3e4.svg?style=flat-square)](https://github.com/yoshuawuyts/choo)

First Chair is a quick and nimble snow tracking app for resorts and snotel sites.

#### Key features to its minimal nature

- choo
- tachyons
- micro
- server side rendering
- async js
- svgs
- async images (if js is supported)
- spa that supports noscript

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
