// very easy => 다시 안 풀어도 됨
// 문제이해
// 개구리가 D만큼 점프할 수 있을 때, X의 위치에서 Y에 도달하기 위한 최소 점프횟수는?

// 단순 수식계산
function solution(X, Y, D) {
  return Math.ceil((Y - X) / D);
}
