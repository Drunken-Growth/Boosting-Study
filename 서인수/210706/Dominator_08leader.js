// 1. 해당 value의 개수를 세는 obj를 만들고, A를 순회한다.
// 2. 각 값을 cnt한다. cnt개수가 half를 넘으면 해당 idx 리턴한다.

// 순회가 끝나면 넘는 값 없으므로 -1 리턴
function solution(A) {
  let obj = {};

  for (let i = 0; i < A.length; i++) {
    obj[A[i]] = (obj[A[i]] || 0) + 1;

    if (obj[A[i]] > A.length / 2) {
      return i;
    }
  }
  return -1;
}
