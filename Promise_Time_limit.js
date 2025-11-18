/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */

/*
 * fn asynchronous function (takes argument of the time limited)
 * t time in millisencods
 * return time limited of the input
 * Time_limited:
 * if fn finishes within t return result
 * if fn exceed t return a reject with "Time Limit Exceeded"
 */
var timeLimit = function (fn, t) {
  return async function (...args) {
    let P1 = fn(...args);
    let P2 = new Promise((_, reject) =>
    {
        setTimeout(() =>
        {
            reject("Time Limit Exceeded");
        }, t);
    });
    return (Promise.race([P1,P2]));
  };
};

const limited = timeLimit((t) => new Promise((res) => setTimeout(res, t)), 100);
limited(1000).catch(console.log); // "Time Limit Exceeded" at t=100ms