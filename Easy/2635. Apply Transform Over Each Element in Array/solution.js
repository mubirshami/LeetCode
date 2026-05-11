/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    for (let x = 0;x<arr.length;x++){
        let val = arr[x]
        arr[x] = fn(val,x);
    }
    return arr;
    
};