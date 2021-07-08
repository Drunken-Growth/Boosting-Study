// 1. Two Sum
// https://leetcode.com/problems/two-sum/
var twoSum = function (nums, target) {
    let hash = new Map();
    
    for(let i = 0; i < nums.length; i++) {
        let sub = target - nums[i];
        if(hash.has(sub)) return [i, hash.get(sub)];
        else hash.set(nums[i],i);
    }
    return hash;
};

var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        const sub = target - nums[i];
        if (nums.slice(i + 1).includes(sub)) return [i, nums.slice(i + 1).indexOf(sub) + (i + 1)];
    }
};