/* Codility L1. BinaryGap (re) */

function solution(N) {
  let ans = 0;
  const bin = N.toString(2);
  let cnt = 0;
  for (let i = 0; i < bin.length; i++) {
    if (bin[i] === "1") {
      ans = Math.max(ans, cnt);
      cnt = 0;
    } else cnt++;
  }
  return ans;
}
