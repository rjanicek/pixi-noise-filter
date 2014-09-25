pixi-noise-filter
=================

A noise filter for [pixi.js](http://www.pixijs.com/).

install with [npm](http://npmjs.org/)
-------------------------------------

```bash
npm install --save pixi.js
npm install --save pixi-noise-filter
```

use with [Browserify](http://browserify.org/)
---------------------------------------------

```js
var PIXI = require('pixi.js');
var NoiseFilter = require('pixi-noise-filter');

var renderer = PIXI.autoDetectRenderer();
document.body.appendChild(renderer.view);
var stage = new PIXI.Stage();

var filter = new NoiseFilter();
filter.noiseLevelRGBA = [0.05, 0.05, 0.05, 0];
stage.filters = [filter];
renderer.render(stage);
```

properties
----------

`noiseLevelRGBA = [R, G, B, A]`

How much noise to apply. Array of RGBA floats with values between 0 (no noise) and 1 (maximum noise). Defaults are [0.05, 0.05, 0.05, 0].