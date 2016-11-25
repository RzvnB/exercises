const binarySearch = function(array, element) {
    var lo = 0;
    var hi = array.length - 1;

    while (lo <= hi) {
        var mid = lo + Math.floor((hi - lo) / 2);
        if (array[mid] === element) {
            return mid;
        }
        if (element < array[mid]) {
            hi = mid - 1;
        } else {
            lo = mid + 1;
        }
    }
    return -1;
}

module.exports = binarySearch;