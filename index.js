'use strict';

function nth(arr, idx) {
  return arr[idx];
}

module.exports = function zipmap(keys, vals) {
  var shorter = keys.length > vals.length ? vals : keys;

  return shorter.reduce(function(map, val, idx) {
    map[nth(keys, idx)] = nth(vals, idx);
    return map;
  }, {});
};
