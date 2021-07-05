// 2번. 엘리베이터

function solution(money, cost) {
  let max = 0;
  let i = 0;
  let [cnt, sum] = [0, 0];

  while (i < cost.length) {
    sum += cost[i];
    if (sum > money) {
      max = Math.max(max, cnt);
      i -= cnt - 1;
      [cnt, sum] = [0, 0];
    } else {
      cnt++;
      i++;
    }
    max = Math.max(max, cnt);
  }
  return max;
}

console.log(solution(420, [0, 900, 0, 200, 150, 0, 30, 50])); // 5
console.log(solution(100, [245, 317, 151, 192])); // 0
console.log(solution(10, [1, 2, 1, 2, 3, 4])); // 5
console.log(solution(15, [1, 2, 1, 2, 3, 4])); // 6
console.log(solution(20, [10, 10, 5, 5])); // 2
