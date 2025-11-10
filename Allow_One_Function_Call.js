/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) {
    let called = 0;
    return function(...args){
        if (called === 0)
        {
            called++;
            return (fn(...args));
        }
        return (undefined)
    }
};

let fn = (a,b,c) => (a + b + c)
let onceFn = once(fn)

console.log("first test = ", onceFn(3,7,1));

console.log("\nsecond test = ", onceFn(2,3,6));
