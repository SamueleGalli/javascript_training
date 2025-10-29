/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    temp = init;
    updated = init;
    var increment = function(init)
    {
        updated++;
        return(updated);
    }
    var decrement = function(init)
    {
        updated--;
        return (updated)

    }
    var reset = function(init)
    {
        updated = temp;
        return (updated)
    }
    return {increment,decrement,reset};
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */