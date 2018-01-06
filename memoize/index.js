const memoize = (fn) => {
    var cache = {};
    return (...args) => {
        if (!(args in cache)) {
            cache[args] = fn(...args);
        }
        return cache[args]
    }
}

module.exports = memoize;