// 코딜리티 다시풀기
// VeryEasy Pass

// 문제이해
// 숫자가 주어졌을 때, 2진수 표현으로 바꾸고, 1과 1사이의 최대 0의 개수를 리턴하는 문제

// 문제풀이
// 1. N을 2진수로 바꾼다.
// 2. 2진수를 순회하며 1의 위치를 기록한다. 다음 1이 나왔을 때의 차이를 max로 기록한다.
function solution(N) {
  let binaryN = N.toString(2);
  let last = 0;
  let max = 0;
  for (let i = 1; i < binaryN.length; i++) {
    if (binaryN[i] === "1") {
      max = Math.max(max, i - last - 1);
      last = i;
    }
  }
  return max;
  // write your code in JavaScript (Node.js 8.9.4)
}
