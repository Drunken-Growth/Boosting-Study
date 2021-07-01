// 백준 - 18310 안테나 (정렬)

function solution(input) {
  // var input = require("fs").readFileSync("/dev/stdin").toString();
  var [n, arr] = input.split("\n");
  n = Number(n);
  arr = arr.split(" ").map((el) => Number(el));
  return arr.sort((a, b) => a - b)[parseInt((n - 1) / 2)];
}

let input = `4
5 1 7 9`;
console.log(solution(input)); // 5
