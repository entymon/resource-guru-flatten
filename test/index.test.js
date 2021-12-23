import assert from 'assert';
import { flatten } from '../src/index.js';

describe('Flatten', function() {
  it('should return flatten array ', function() {
    assert.deepEqual([1, 2, 3, 4], flatten([ 1, [ 2, [ 3 ] ], 4 ]));
  });
});