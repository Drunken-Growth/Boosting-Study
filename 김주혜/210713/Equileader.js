/* Codility - Equileader */
function solution(A) {
  let ans = 0;
  let right = {};
  for (let i = 0; i < A.length; i++) {
    right[A[i]] ? right[A[i]]++ : (right[A[i]] = 1);
  }

  let left = {};
  let leader = 0;
  for (let i = 0; i < A.length - 1; i++) {
    let [leftLen, rightLen] = [i + 1, A.length - i - 1];
    right[A[i]]--;
    left[A[i]] ? left[A[i]]++ : (left[A[i]] = 1);
    if (left[A[i]] > leftLen / 2) leader = A[i];
    if (left[leader] > leftLen / 2 && right[leader] > rightLen / 2) ans++;
  }
  return ans;
}
