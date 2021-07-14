/** 코딜리티 - MaxCounters */

// timeout
function solution(N, A) {
  let arr = Array(N).fill(0);
  let max = 0;
  A.forEach((n) => {
    if (n > N) arr = Array(N).fill(max);
    else {
      arr[n - 1]++;
      if (max < arr[n - 1]) max = arr[n - 1];
    }
  });
  return arr;
}

// re
function solution(N, A) {
  let arr = Array(N).fill(0);
  let maxCount = 0;
  let max = 0;
  A.forEach((n) => {
    if (arr[n - 1] < maxCount) arr[n - 1] = maxCount;
    if (n > N) maxCount = max;
    else {
      arr[n - 1]++;
      if (max < arr[n - 1]) max = arr[n - 1];
    }
  });

  return arr.map((el) => {
    if (el < maxCount) return maxCount;
    else return el;
  });
}
