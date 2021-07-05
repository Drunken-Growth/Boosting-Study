// 1차 풀이
// => 엣지케이스 [0,0,11] , [10,10,5] 등에서 통과히지 않는다.

// 가장 작은 V1 을 구하고, 횟수만큼 반복해서 넣는다.
// 1. 가장 작은 시작값 startQ, 끝값 endQ 구하기
// 2. result 배열 개수 구하가
// 3. A를 K 나누어 떨어지면 해당 몫을, 나누어 떨어지지 않으면 올림값을 시작값으로 한다.
function solution(A, B, K) {
  let startQ;
  let endQ;
  if (A % K === 0) {
    startQ = A / K;
  } else {
    startQ = Math.floor(A / K);
  }

  if (B % K === 0) {
    endQ = B / K;
  } else {
    endQ = Math.floor(B / K);
  }

  return endQ - startQ + 1;
}
