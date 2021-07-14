/* Codility - StrSymmetryPoint */

function solution(S) {
  if (S.length === 1) return 0;
  if (S.length % 2 === 0) return -1;
  let center = parseInt(S.length / 2);
  let [start, end] = [0, S.length - 1];
  for (let i = 0; i < center; i++) {
    if (S[start + i] !== S[end - i]) return -1;
  }
  return center;
}
