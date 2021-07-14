// 문제이해
// n을 k번 한 문자열의 각 자리수를 더하는 과정을 반복한다.
// 각 자리수 의 합이 한 자리 숫자가 될 때 해당 값을 리턴한다.

// 풀이 (by 재귀)
// 1. n을 더한 후 k를 곱해 첫 자리수 합을 구한다.
// 2. 숫자를 문자열로 바꾸어, 순회하며 새로운 값을 리턴한다.
// 3. 10이하가 될 때까지 2번을 반복한다.

function solution(n, k) {
  let start = 0;
  for (let i = 0; i < String(n).length; i++) {
    start += Number(String(n)[i]) * k;
  }

  function rec(number) {
    let value = 0;
    if (number < 10) return number;
    for (let i = 0; i < String(number).length; i++) {
      value += Number(String(number)[i]);
    }
    return rec(value);
  }

  return rec(start);
}

console.log(solution(148, 3));
console.log(solution(9875, 4));
