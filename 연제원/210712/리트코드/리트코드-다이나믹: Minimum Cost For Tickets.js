// You have planned some train traveling one year in advance.
// The days of the year in which you will travel are given as an integer array days.
// Each day is an integer from 1 to 365.

// Train tickets are sold in three different ways:

// a 1-day pass is sold for costs[0] dollars,
// a 7-day pass is sold for costs[1] dollars, and
// a 30-day pass is sold for costs[2] dollars.
// The passes allow that many days of consecutive travel.

// For example, if we get a 7-day pass on day 2, then we can travel for 7 days: 2, 3, 4, 5, 6, 7, and 8.

// Return the minimum number of dollars you need to travel every day in the given list of days.

const mincostTickets = function (days, costs) {
  const dp = Array(days[days.length - 1] + 1);
  dp[0] = 0;

  // 모든 날에 대해 반복문 수행
  for (let i = 1; i < dp.length; i++) {
    // 만일 days 배열에 속하지 않는 i라면, 이전 날과 같은 비용을 저장하면 된다. => 이 날을 위해 굳이 티켓을 살 필요가 없으므로.
    if (!days.includes(i)) {
      dp[i] = dp[i - 1];
    } else {
      // days 배열에 속한 날이라면 3가지 경우 중 가장 싼 비용을 찾으면 된다.
      dp[i] = Math.min(
        dp[Math.max(0, i - 1)] + costs[0],
        dp[Math.max(0, i - 7)] + costs[1],
        dp[Math.max(0, i - 30)] + costs[2]
      );
    }
  }
  return dp[dp.length - 1];
};

console.log(mincostTickets([1, 4, 6, 7, 8, 20], [2, 7, 15])); // 11
console.log(
  mincostTickets([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 30, 31], [2, 7, 15])
); // 17
