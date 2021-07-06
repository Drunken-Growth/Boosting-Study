/* 코딜리티 L8 - Dominator */

function solution(A) {
  let obj = {};
  for (let i = 0; i < A.length; i++) {
    if (!obj[A[i]]) obj[A[i]] = [i, 1];
    else obj[A[i]][1]++;
  }
  for (let key in obj) {
    if (obj[key][1] > A.length / 2) return obj[key][0];
  }
  return -1;
}
