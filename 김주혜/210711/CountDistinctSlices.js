/* 코딜리티 - CountDistinctSlices */

// O(N * (N + M))
function solution(M, A) {
  let cnt = A.length;
  for (let i = 0; i < A.length; i++) {
    let map = new Map();
    map.set(A[i], 1);
    for (let j = i + 1; j < A.length; j++) {
      if (map.get(A[j])) break;
      map.set(A[j], 1);
      cnt++;
      if (j > i + M) break;
    }
  }
  return cnt;
}

// O(N)
function solution(M, A) {
  let ans = 0;
  let checked = Array(M + 1).fill(false);
  let right = 0;
  for (let left = 0; left < A.length; left++) {
    while (right < A.length && !checked[A[right]]) {
      ans += right - left + 1;
      checked[A[right]] = true;
      right++;
      if (ans >= 1000000000) return 1000000000;
    }
    checked[A[left]] = false;
  }
  return ans;
}
