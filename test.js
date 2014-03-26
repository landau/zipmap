'use strict';

var assert = require('assert');
var zipmap = require('./');

var keys = ['a', 'b', 'c'];
var vals = [1, 2, 3];

describe('zipmap', function() {
  it('should zip keys and vals', function() {
    var map = zipmap(keys, vals);
    assert.deepEqual(map, { a: 1, b: 2, c: 3 });
  });

  it('should zip with the shorter array', function() {
    var map = zipmap(keys.slice(0,1), vals);
    assert.deepEqual(map, { a: 1 });

    map = zipmap(keys, vals.slice(0, 2));
    assert.deepEqual(map, { a: 1, b: 2 });
  });
});
