var assert = require('assert');
var memoize = require('./');

describe('memoize', function() {

  it('can handle a single argument', function() {
    var called = 0;
    var fib = memoize(function(n) {
      called++;
      if (n < 2) return n;
      return fib(n - 1) + fib(n - 2);
    });
    fib(10);
    assert.equal(called, 11);
  });

  it('can handle multiple arguments', function() {
    var called = 0;
    var fib = memoize(function(n, unused) {
      called++;
      if (n < 2) return n;
      return fib(n - 1, unused) + fib(n - 2, unused);
    });
    fib(10, 'x');
    fib(10, 'y');
    assert.equal(called, 22);

  });

  it('returns correct result', function() {
    var fib = memoize(function(n) {
      if (n < 2) return n;
      return fib(n - 1) + fib(n - 2);
    });
    assert.equal(fib(10), 55);
  });


});
