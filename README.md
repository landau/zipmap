[![Build Status](https://travis-ci.org/landau/zipmap.svg)](https://travis-ci.org/landau/zipmap)

zipmap
======

Returns a map with the keys mapped to the corresponding vals.

## Install

`npm i -S zipmap`

## Usage

```js
var keys = ['a', 'b', 'c'];
var vals = [1, 2, 3];

var map = zipmap(keys, vals);
assert.deepEqual(map, { a: 1, b: 2, c: 3 });
```
