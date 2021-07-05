function solution(N, K) {
  let result = 0;

  while (N !== 1) {
    if (N % K === 0) {
      N = N / K;
    } else {
      N = N - 1;
    }
    result += 1;
  }

  return result;
}

console.log(solution(25, 5)); // 2
console.log(solution(27, 3)); // 3

/*
1. 먼저 N을 K로 나눌 수 있는지 확인한다.
2. 나눌 수 있으면 0이 되기 직전까지 나누고, 없으면 1을 뺀다.
3. 나눴을 경우 1이 될 때까지 1을 빼준다.
4. 나누지 못했을 경우 1을 빼다가 나눌 수 있을 때 바로 나눈다.
5. 연산횟수를 카운팅한다.
*/
