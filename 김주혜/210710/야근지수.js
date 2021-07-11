/* 프로그래머스 - 야근지수(구현) */

function solution(n, works) {
  if (works.reduce((p, c) => p + c, 0) <= n) return 0;
  works.sort((a, b) => b - a);

  while (n > 0) {
    works[0]--;
    n--;
    if (n < 1) break;
    let cnt = 0;
    while (works[cnt + 1] && works[cnt] + 1 === works[cnt + 1]) {
      works[cnt + 1]--;
      cnt++;
      n--;
      if (n < 1) break;
    }
  }
  let sum = 0;
  for (let work of works) {
    sum += Math.pow(work, 2);
  }
  return sum;
}
