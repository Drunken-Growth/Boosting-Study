// 1. A존재하는 모든 1의 개수를 구한다.(totalQ)
// 2. A를 순회하며
//  2.1 0일 경우 현재 result += totalQ
//  2.2 1일 경우 totalQ 에서 -1 하고 continue

function solution(A) {
  let totalQ = A.reduce((acc, cur) => {
    if (cur === 1) acc++;
    return acc;
  }, 0);

  let result = 0;
  for (let i = 0; i < A.length; i++) {
    if (A[i] === 1) {
      totalQ -= 1;
      continue;
    }
    result += totalQ;
    if (result > 1000000000) return -1;
  }

  return result;
}
