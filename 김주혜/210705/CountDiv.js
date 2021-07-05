/* 코딜리티 L5 - CountDiv */

// timeout
function solution(A, B, K) {
  let cnt = 0;
  for (let i = A; i <= B; i++) {
    if (i % K === 0) cnt++;
  }
  return cnt;
}

// re
function solution(A, B, K) {
  for (let i = A; i <= B; i++) {
    if (i % K === 0) return parseInt((B - i) / K) + 1;
  }
  return 0;
}
