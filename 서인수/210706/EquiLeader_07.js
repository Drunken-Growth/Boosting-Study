// 문제이해
// 특정 idx를 기준으로 앞뒤의 leader가 같은 경우의 수를 구해라
// O(N) 방법 잘 이해가 안간다. //TODO HELP

// O(N^2) 으로 먼저 접근해봄
// 모든 경우의 수를 구해보는 방법
function solution(A) {
  let cnt = 0;
  function leaderCheck(start, end) {
    let obj = {};
    for (let i = start; i < end + 1; i++) {
      obj[A[i]] = (obj[A[i]] || 0) + 1;

      if (obj[A[i]] > (end - start + 1) / 2) {
        // console.log(['leaderCheck',start,end, obj[A[i]], A.length/2], A[i])
        return A[i];
      }
    }
    return -1;
  }

  //0부터 j까지 리더검사
  //j+1 부터 끝까지 리더감사
  for (let j = 0; j < A.length; j++) {
    let left = leaderCheck(0, j); // (0,0) (0,1)
    let right = leaderCheck(j + 1, A.length - 1); //(1,5) (2,5)

    if (left === -1 || right === -1) continue;
    if (left === right) cnt++;
  }
  return cnt;
}
