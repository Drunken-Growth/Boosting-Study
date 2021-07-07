// 2번. 엘리베이터

function solution(money, cost) {
  let max = 0;
  let start = 0;
  let [sum, cnt] = [0, 0];

  for (let i = 0; i < cost.length; i++) {
    // 예산초과전
    if (sum + cost[i] <= money) {
      [sum, cnt] = [sum + cost[i], cnt + 1];
      max = Math.max(max, cnt);
    }
    // 예산초과
    else {
      if (sum + cost[i] - cost[start] <= money) {
        sum = sum + cost[i] - cost[start];
        start++;
      } else {
        start = i; // 시작지점 초기화
        [sum, cnt] = [cost[i], 1];
      }
    }
  }
  max = Math.max(max, cnt);
  return max;
}

console.log(solution(20, [10, 10, 5, 5])); // 3
console.log(solution(7, [0, 2, 1, 2, 3, 3, 1, 1, 1, 1, 1, 1, 1])); // 7
console.log(solution(420, [0, 900, 0, 200, 150, 0, 30, 50])); // 5
console.log(solution(100, [245, 317, 151, 192])); // 0
console.log(solution(10, [1, 2, 1, 2, 3, 4])); // 5
console.log(solution(15, [1, 2, 1, 2, 3, 4])); // 6
console.log(solution(7, [0, 2, 1, 2, 3, 4, 1, 1, 1, 1, 1, 1, 2])); // 6
console.log(solution(7, [0, 2, 1, 2, 3, 4, 1, 1, 1, 1, 1, 1, 1])); // 7
console.log(solution(7, [1, 1, 1, 5, 1, 1])); // 3
console.log(solution(7, [1, 2, 1, 5, 1, 1])); // 3
console.log(solution(8, [10, 2, 1, 15, 1, 1])); // 2
