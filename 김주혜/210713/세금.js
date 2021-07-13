/* 세금 정책 시뮬레이션 */

function solution(money, minratio, maxratio, ranksize, threshold, months) {
  let maybe = money - (money % 100);
  if (maybe < threshold) return money;

  for (let i = 0; i < months; i++) {
    maybe = money - (money % 100);
    let ratio = minratio + Math.floor((money - threshold) / ranksize); // 세율
    if (ratio > maxratio) ratio = maxratio;
    if (maybe < threshold) ratio = 0;
    if (ratio === 0) return money;
    money -= (maybe * ratio) / 100;
  }
  return money;
}

console.log(solution(12345678, 10, 20, 250000, 10000000, 4)); // 9000014
console.log(solution(1000000000, 50, 99, 100000, 0, 6)); // 6150
console.log(solution(123456789, 0, 0, 1, 0, 360)); //123456789
