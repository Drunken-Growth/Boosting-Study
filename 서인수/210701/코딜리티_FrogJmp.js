//풀이방법
// 1. 뛰어야하는 거리는 Y - X 이다.
// 2. 뛰어야하는 횟수는 거리를 D로 나눈 몫 + 1 이다.

function solution(X, Y, D) {
  return Math.ceil((Y - X) / D);
}
