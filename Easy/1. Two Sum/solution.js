/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for (let i=0; i<nums.length; i++){
        let remainder = target - nums[i]
        if (nums.includes(remainder) && nums.indexOf(remainder)!==i){
            return [i,nums.indexOf(remainder)]
        }
    }
    
};