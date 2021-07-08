// 카데인 알고리즘 대표 문제

var maxSubArray = function (nums) {
    let max = -Infinity;
    let prev = 0;
    
    for (let i = 0; i < nums.length; i++) {
        prev = Math.max(prev + nums[i], nums[i]);
        max = Math.max(max, prev);
    }
    return max;
};