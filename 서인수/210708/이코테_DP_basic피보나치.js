// DP는 1. 큰 문제를 작은 문제로 나눌 수 있을 때, 2. 작은 문제에서의 정답이 큰 문제에서도 동일하게 필요할 때 사용한다.
// 점화식으로 표현되는 것이 대표적인 DP사례이며,
// 메모이제이션을 이용한 방법으로 접근가능하다.

function fibo(N) {
  let memo = [1, 1];

  if (N <= 2) {
    return 1;
  }

  if (memo[N]) {
    return memo[N];
  }

  memo[N] = fibo(N - 1) + fibo(N - 2);
  return memo[N];
}

console.log(fibo(10));
