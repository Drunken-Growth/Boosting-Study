// 완전 Fail
// 레퍼 찾아봐도 해당방식이 잘 이해가가지않는다.

function solution(M, A) {
  let prevIdx = 0;
  let result = 1;
  for (let i = 1; i < A.length; i++) {
    let slice = A.slice(0, i);
    if (slice.lastIndexOf(A[i]) !== -1) {
      prevIdx = slice.lastIndexOf(A[i]) + 1;
    }
    result += i + 1 - prevIdx;
    // console.log([i, prevIdx,result])
  }
  return result;
}
