/**
 * @param {string} val
 * @return {Object}
 */
var expect = function (val) {
    const toBe = function(val2) {
        if (val === val2)
            return (true);
        throw ("Not Equal");
    }
    const notToBe = function(val2) {
        if (val !== val2)
            return (true);
        throw ("Equal");
    }
    return {notToBe, toBe};
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */