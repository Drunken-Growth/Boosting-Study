// You are given an integer array coins representing coins of different denominations
// and an integer amount representing a total amount of money.
// Return the fewest number of coins that you need to make up that amount.
// If that amount of money cannot be made up by any combination of the coins, return -1.
// You may assume that you have an infinite number of each kind of coin.

const coinChange = function (coins, amount) {
  const arr = Array(amount + 1).fill(Number.MAX_SAFE_INTEGER);
  arr[0] = 0;

  for (let coin of coins) {
    for (let i = coin; i < arr.length; i++) {
      arr[i] = Math.min(arr[i], arr[i - coin] + 1);
    }
  }
  return arr[amount] !== Number.MAX_SAFE_INTEGER ? arr[amount] : -1;
};

console.log(coinChange([1, 2, 5], 11)); // 3
console.log(coinChange([2], 3)); // -1
console.log(coinChange([1], 0)); // 0
