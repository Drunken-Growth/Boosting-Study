// leetcode 300. Longest Increasing Subsequence
// https://leetcode.com/problems/longest-increasing-subsequence/
var lengthOfLIS = function (nums) {
    const n = nums.length;
    const dp = Array.from({length: n}, () => 1);
    
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                console.log(i, j);
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
    }
    return Math.max(...dp);
};