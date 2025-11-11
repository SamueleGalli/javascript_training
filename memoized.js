/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    let maps = new Map();
    return function (...args) {
        let result;
        if (maps.size !== 0) {
            if (maps.has(JSON.stringify(args)) === true) {
                result = maps.get(JSON.stringify(args));
                return (result);
            }
        }
        result = fn(...args);
        maps.set(JSON.stringify(args), result);
        return (result);
    }
}

/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */