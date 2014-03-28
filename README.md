[![Build Status](https://travis-ci.org/landau/zipmap.svg)](https://travis-ci.org/landau/zipmap)

zipmap
======

Returns a map with the keys mapped to the corresponding vals.

```js
/**
 * Returns a map with the keys mapped to the corresponding vals.
 *
 * @param {array} keys
 * @param {array} vals
 *
 * @return {object}
 */
function zipmap(keys, vals) { }
```

## Install

`npm i -S zipmap`

## Usage

```js
var assert = require('assert');
var zipmap = require('zipmap');

var keys = ['a', 'b', 'c'];
var vals = [1, 2, 3];

var map = zipmap(keys, vals);
assert.deepEqual(map, { a: 1, b: 2, c: 3 });
```
