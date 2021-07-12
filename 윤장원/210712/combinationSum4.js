// leetcode 377. Combination Sum IV
// https://leetcode.com/problems/combination-sum-iv/
// 풀이 1 시간 초과
var combinationSum4 = function (nums, target) {
    let result = 0;
    const aux = (idx, sum) => {
        if (sum > target) return;
        if (sum === target) {
            result += 1;
            return;
        }
        for (let i = 0; i < nums.length; i++) {
            aux(i, sum + nums[i]);
        }
    }
    
    aux(0, 0);
    return result;
};

// 풀이 2 DP 
var combinationSum4 = function(nums, target) {
    const memo = Array.from({ length: target + 1 }, () => 0);
    memo[0] = 1;
    for (let i = 1; i <= target; i++) {
        for (const num of nums) {
            if (i - num >= 0) memo[i] += memo[i - num];
        }
    }
    return memo[target];
};

var combinationSum4 = function(N, T) {
    let dp = new Uint32Array(T+1)
    dp[0] = 1
    for (let i = 0; i < T; i++) {
        if (!dp[i]) continue
        for (let num of N)
            if (num + i <= T) dp[i+num] += dp[i]
    }
    return dp[T]
};