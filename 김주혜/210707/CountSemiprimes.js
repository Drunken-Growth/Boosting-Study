/* 코딜리티 L11 - CountSemiPrimes */

function solution(N, P, Q) {
  let result = [];
  let nums = Array(N + 1).fill(0);

  // 에라토스테네스의 채 -> 소수테이블 만들기
  for (let i = 2; i <= Math.sqrt(N); i++) {
    if (nums[i] === 0) {
      for (j = i * i; j <= N; j += i) {
        if (nums[j] === 0) nums[j] = i;
      }
    }
  }

  // 소수개수 누적합 배열 생성
  let semi = Array(N + 1).fill(0);
  for (let i = 1; i <= N; i++) {
    if (nums[i] && !nums[i / nums[i]]) semi[i] = semi[i - 1] + 1;
    else semi[i] = semi[i - 1];
  }
  for (let i = 0; i < P.length; i++) {
    result.push(semi[Q[i]] - semi[P[i] - 1]);
  }
  return result;
}
