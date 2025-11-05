/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    let FilteredArr = [];
    let j = 0;
    for (i = 0;i < arr.length; i++)
    {
        if (fn(arr[i], i) !== false && fn(arr[i], i) !== 0)
            FilteredArr[j++] = arr[i];
    }
    return FilteredArr;
};