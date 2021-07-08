// https://leetcode.com/problems/maximum-product-subarray/
// leetcode 152. Maximum Product Subarray
// 카데인 알고리즘
var maxProduct = function (nums) {
    let prevMin = nums[0];
    let prevMax = nums[0];
    let result = nums[0];
    
    for (let i = 1; i < nums.length; i++) {
        const curMax = Math.max(nums[i], nums[i] * prevMax, nums[i] * prevMin);
        const curMin = Math.min(nums[i], nums[i] * prevMax, nums[i] * prevMin);
        prevMax = curMax;
        prevMin = curMin;
        result = Math.max(result, curMax);
    }
    
    return result;
};