/* LeetCode - 55. Jump Game (DP) */

var canJump = function (nums) {
  if (nums.length < 2) return true;
  if (nums[0] === 0) return false;
  const dp = Array(nums.length).fill(0);
  for (i = 1; i <= nums[0]; i++) {
    if (dp[i] !== undefined) dp[i]++;
  }
  for (let i = 1; i < nums.length; i++) {
    for (let j = i + 1; j <= i + nums[i]; j++) {
      if (dp[i] !== 0 && dp[j] !== undefined) dp[j]++;
    }
  }
  return dp[dp.length - 1] !== 0;
};
