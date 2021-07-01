// 문제풀이
// 1. N을 binary값으로 바꾼다.
// 2. '1'인 부분의 idx 를 전부 gaps에 넣는다.
// 3. 각 gaps 사이의 차이 ( b - a -1) 를 구하고 가장 큰 값을 리턴한다.

function solution(N) {
  let binary = N.toString(2);
  let gaps = [];
  for (let i = 0; i < binary.length; i++) {
    if (binary[i] === "1") {
      gaps.push(i);
    }
  }

  let result = gaps.reduce((acc, cur, idx) => {
    return Math.max(acc, cur - gaps[idx - 1] - 1);
  });
  return result;
  // write your code in JavaScript (Node.js 8.9.4)
}
