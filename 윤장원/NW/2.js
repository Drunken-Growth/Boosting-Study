function solution(money, cost) {
  let exception = cost.length;
  cost.sort((a, b) => a - b);
  for (const x of cost) {
    if (x > money) exception -= 1;
  }
  // 예외 사항
  if (exception === 0) return 0;

  const memo = Array.from({ length: cost.length }, () => 0);
  let now = money;
  let result = 0;

  for (let i = 0; i < cost.length; i++) {
    if (cost[i] <= now) {
      now -= cost[i];
      result += 1;
      memo[i] = result;
    } else {
      now = money;
      result = 0;
    }
  }

  return Math.max(...memo);
}

// solution(20, [10,10,5,5]); // output 5
solution(100 ,[245, 317, 151, 192]) // output 0