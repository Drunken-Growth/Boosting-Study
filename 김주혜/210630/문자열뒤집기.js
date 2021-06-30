// 백준 1430 - 문자열 뒤집기 (그리디)

function solution(input) {
  // var input = require("fs").readFileSync("/dev/stdin").toString();
  let [zeros, ones] = [0, 0];
  let cur;

  for (let i = 0; i < input.length; i++) {
    if (cur !== input[i]) {
      if (input[i] === "0") zeros++;
      if (input[i] === "1") ones++;
      cur = input[i];
    }
  }
  return Math.min(zeros, ones);
}

console.log(solution("0001100")); // 1
console.log(solution("0000000")); // 0
console.log(solution("0010100")); // 2
console.log(solution("1010100")); // 3
