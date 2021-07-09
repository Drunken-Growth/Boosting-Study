// 문제
// 어떠한 수 N이 1이 될 때까지 다음의 두 과정 중 하나를 반복적으로 선택하여 수행하려고 한다.
// 단, 두 번째 연산은 N이 K로 나누어떨어질 때만 선택할 수 있다.

// 1. N에서 1을 뺀다.
// 2. N을 K로 나눈다.

function solution(N, K) {
  let count = 0;

  while (N !== 1) {
    count++;

    if (N % K === 0) {
      N = N / K;
    } else {
      N -= 1;
    }
  }

  return count;
}

console.log(solution(25, 5)); // 2
console.log(solution(36, 4)); // 4 (2 -> 1 -> 2 -> 1)
console.log(solution(36, 5)); // 5 (1(35) -> 2(7) -> 1(6) -> 1(5) -> 2(1))
