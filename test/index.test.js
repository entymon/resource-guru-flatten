import assert from 'assert';
import {
  flatten1,
  flatten2,
  flatten3
} from '../src/index.js';

describe('Flatten1', function() {
  it('should return flatten array ', function() {
    assert.deepEqual([1, 2, 3, 4], flatten1([ 1, [ 2, [ 3 ] ], 4 ]));
  });
});

describe('Flatten2', function() {
  it('should return flatten array ', function() {
    assert.deepEqual([1, 2, 3, 4], flatten2([ 1, [ 2, [ 3 ] ], 4 ]));
  });
});

describe('Flatten3', function() {
  it('should return flatten array ', function() {
    assert.deepEqual([1, 2, 3, 4], flatten3([ 1, [ 2, [ 3 ] ], 4 ]));
  });
});