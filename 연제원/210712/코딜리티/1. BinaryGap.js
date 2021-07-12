// 새로 푼 방식
function solution(N) {
  N = N.toString(2);
  N.shift();
  N.pop();

  let answer = 0;
  for (let x of N) {
    answer = Math.max(answer, x.length);
  }
  return answer;
}

// 기존
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
