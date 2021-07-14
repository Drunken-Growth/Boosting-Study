const mincostTickets = function (days, costs) {
  const len = days.length;
  const dp = Array.from({ length: days[len - 1] + 1 }, () => Infinity);

  // 초기값
  dp[0] = 0;

  // 여행 시작점 초기화
  for (let i = 0; i < len; i++) {
    if (dp[days[i]]) {
      dp[days[i]] = 0;
    }
  }

  for (let i = 1; i < days[len - 1] + 1; i++) {
    // 여행 기록이 없는 날이면 전 날 기록을 가져온다.
    if (dp[i] === Infinity) {
      dp[i] = dp[i - 1];
    } else {
      let cur = dp[i - 1] + costs[0];
      cur = Math.min(cur, dp[Math.max(0, i - 7)] + costs[1]);
      cur = Math.min(cur, dp[Math.max(0, i - 30)] + costs[2]);
      dp[i] = cur;
    }
  }

  return dp[dp.length - 1];
};

/*
날짜들로 구성된 배열이 주어진다. 각 날짜들은 1부터 365까지 있다.
1일치 경비: dp[i - 1] + days[0];
7일치 경비: dp[i - 7] + days[1];
30일치 경비: dp[i - 30] + days[2];
날마다 1일치 경비와 (7일치, 30일치 중 더 큰 값)중에 작은 값을 저장한다.
여행가지 않은 날이면 전 날 기록을 가져온다.
*/
