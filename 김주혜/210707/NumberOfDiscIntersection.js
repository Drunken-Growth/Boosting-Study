/* 코딜리티 L5 - NumberOfDiscIntersection */

function solution(A) {
  let ans = 0;
  let left = [];
  let right = [];
  for (let i = 0; i < A.length; i++) {
    left.push(i - A[i]);
    right.push(i + A[i]);
  }
  left.sort((a, b) => a - b);
  right.sort((a, b) => a - b);

  for (let i = 0; i < right.length - 1; i++) {
    let sum = 0;
    for (let j = 0; j < left.length; j++) {
      if (right[i] >= left[j]) sum++;
      else break;
    }
    ans += sum - i - 1;
    if (ans > 10000000) return -1;
  }
  return ans;
}
