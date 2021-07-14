/* Codility - Peaks */

function solution(A) {
  if (A.length < 3) return 0;

  let peaks = [];
  for (let i = 1; i < A.length - 1; i++) {
    if (A[i] > A[i - 1] && A[i] > A[i + 1]) peaks.push(i);
  }

  if (peaks.length === 0) return 0;

  for (let i = peaks.length; i >= 2; i--) {
    if (A.length % i === 0) {
      const num = A.length / i; // block당 원소 개수
      let cnt = 0; // peak이 포함된 block 개수

      for (let peak in peaks) {
        let [start, end] = [cnt * num, (cnt + 1) * num];
        if (peaks[peak] >= start && peaks[peak] < end) cnt++;
      }
      if (cnt === i) return i;
    }
  }
  return 1;
}
