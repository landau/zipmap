'use strict';

function nth(arr, idx) {
  return arr[idx];
}

var toString = Function.call.bind(Object.prototype.toString);

function isObj(o) {
  return toString(o) === '[object Object]';
}

// Original zipmap
function _zipmap(keys, vals) {
  var shorter = keys.length > vals.length ? vals : keys;

  return shorter.reduce(function(map, val, idx) {
    map[nth(keys, idx)] = nth(vals, idx);
    return map;
  }, {});

}

function zipmapPairs(pairs) {
  return pairs.reduce(function(map, pair) {
    map[nth(pair, 0)] = nth(pair, 1);
    return map;
  }, {});
}

function zipmapObj(objs) {
  return objs.reduce(function(map, o) {
    map[o.key] = o.value;
    return map;
  }, {});
}

/**
 * Returns a map with the keys mapped to the corresponding vals.
 *
 * @param {array} keys
 * @param {array} [vals]
 *
 * @return {object}
 */
module.exports = function zipmap(keys, vals) {
  if (!vals) {
    if (Array.isArray(nth(keys, 0))) return zipmapPairs(keys);
    if (isObj(nth(keys, 0))) return zipmapObj(keys);
    throw new TypeError('Expected vals to be an array');
  }

  return _zipmap(keys, vals);
};
