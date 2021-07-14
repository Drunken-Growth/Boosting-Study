// 1번. 환율

// 세가지 경우 dfs 탐색
// 종료조건 : day가 끝날때
// case
// 1. 삼 (달러 = 0, 원화 >= 환율)
// 2. 팜 (달러 = 1)
// 3. 패스 (조건 X)

function solution(k, rates) {
  let max = 0;
  dfs(0, k, 0);

  // dollar : 보유달러, won : 보유원화, day : 날짜
  function dfs(dollar, won, day) {
    if (day === rates.length) {
      max = Math.max(won, max);
      return;
    }
    if (!dollar && won >= rates[day]) dfs(1, won - rates[day], day + 1);
    else if (dollar) dfs(0, won + rates[day], day + 1);
    dfs(dollar, won, day + 1);
  }
  return max;
}

console.log(
  solution(1000, [1200, 1000, 1100, 1200, 900, 1000, 1500, 900, 750, 1100])
); // 2150

console.log(solution(1500, [1500, 1400, 1300, 1200])); // 1500
