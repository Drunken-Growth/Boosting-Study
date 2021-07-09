// 코딜리티 L5 - MinAvgTwoSlice

function solution(A) {
  let minAvg = (A[0] + A[1]) / 2;
  let minIdx = 0;

  for (let i = 2; i < A.length; i++) {
    let avg1 = (A[i - 2] + A[i - 1] + A[i]) / 3;
    let avg2 = (A[i - 1] + A[i]) / 2;
    let min = Math.min(minAvg, avg1, avg2);
    if (minAvg > avg1) minIdx = i - 2;
    if (minAvg > avg2 && avg1 > avg2) minIdx = i - 1;
    minAvg = min;
  }
  return minIdx;
}
