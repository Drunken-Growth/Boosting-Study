// leetcode. 322. Coin Change
// https://leetcode.com/problems/coin-change/
var coinChange = function (coins, amount) {
    const memo = Array.from({length: amount + 1} , () => Infinity);
    memo[0] = 0;
    
    for (let i = 1; i <= amount; i++) {
        for (const coin of coins) {
            if (i - coin >= 0) {
                memo[i] = Math.min(memo[i] , memo[i - coin] + 1);
            }
        }
    }
    return memo[amount] === Infinity ? -1 : memo[amount];
};