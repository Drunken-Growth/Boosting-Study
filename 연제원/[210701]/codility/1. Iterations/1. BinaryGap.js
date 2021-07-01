// https://app.codility.com/demo/results/trainingHQBDZS-FZX/
// BinaryGap

// A binary gap within a positive integer N is any maximal sequence of consecutive zeros
// that is surrounded by ones at both ends in the binary representation of N.

// For example, number 9 has binary representation 1001 and contains a binary gap of length 2.
// The number 529 has binary representation 1000010001 and contains two binary gaps:
// one of length 4 and one of length 3.
// The number 20 has binary representation 10100 and contains one binary gap of length 1.
// The number 15 has binary representation 1111 and has no binary gaps.
// The number 32 has binary representation 100000 and has no binary gaps.

// Write a function:

// function solution(N);

// that, given a positive integer N, returns the length of its longest binary gap.
// The function should return 0 if N doesn't contain a binary gap.

// For example, given N = 1041 the function should return 5, because N has binary representation 10000010001
// and so its longest binary gap is of length 5.
// Given N = 32 the function should return 0,
// because N has binary representation '100000' and thus no binary gaps.

// Write an efficient algorithm for the following assumptions:

// N is an integer within the range [1..2,147,483,647].
// Copyright 2009–2021 by Codility Limited. All Rights Reserved.
// Unauthorized copying, publication or disclosure prohibited.

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

// 문제 : N을 이진수로 변화했을 때 0의 최대 길이를 구하라.
// ex) N = 1041일때 => 이진수 = 1000010001 => 최대 길이 5
// 주의 N = 32일때 => 이진수 = 100000 => 1과 1 사이에 있지 않으므로 0

function solution(N) {
  // write your code in JavaScript (Node.js 8.9.4)
  let answer = 0;

  // 1. 이진수로 변환
  // let binary = "";
  // while (N > 0) {
  //   binary = (N % 2) + binary;
  //   N = parseInt(N / 2);
  // }
  const binary = N.toString(2);

  // 2. 일단 양 끝의 1을 제거해야하므로 자른다.
  //    indexOf(1) 로 첫번째 1의 위치를 구함
  //    lastIndexOf(1) 로 마지막 1의 위치를 구함
  //    => 만일 마지막에 없다면 결국 배열은 0이 될 것!
  const binaryGaps = binary.slice(binary.indexOf(1) + 1, binary.lastIndexOf(1));

  const zeroCount = binaryGaps.split(1).map((zero) => zero.length);
  return Math.max(...zeroCount);
}

console.log(solution(5));
console.log(solution(1041));
console.log(solution(17));
console.log(solution(8));
console.log(solution(32));
