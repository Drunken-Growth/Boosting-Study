function solution(M, riceList) {
  riceList.sort((a, b) => a - b);

  let [start, end] = [0, riceList[riceList.length - 1]];
  let memo = 0;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    // mid로 잘랐을 때 M 만족하는 지 확인

    let sum = riceList.reduce((acc, cur) => {
      return acc + Math.max(cur - mid, 0);
    }, 0);

    if (sum >= M) {
      memo = mid; // 9
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return memo;
}

console.log(solution(3, [20, 16, 11, 7]));
