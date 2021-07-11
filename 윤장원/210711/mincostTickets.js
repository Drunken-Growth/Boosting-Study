// leetcode 983. Minimum Cost For Tickets
// https://leetcode.com/problems/minimum-cost-for-tickets/
var mincostTickets = function (days, costs) {
  const memo = Array.from({length: days[days.length - 1] + 1}, () => Infinity);
  memo[0] = 0;
  
  for (let i = 1; i < memo.length; i++) {
      if (!days.includes(i)) memo[i] = memo[i - 1];
      else {
        memo[i] = Math.min(
          memo[Math.max(0, i - 1)] + costs[0],
          memo[Math.max(0, i - 7)] + costs[1],
          memo[Math.max(0, i - 30)] + costs[2]
        );
      }
  }
  return memo[memo.length - 1];
};
