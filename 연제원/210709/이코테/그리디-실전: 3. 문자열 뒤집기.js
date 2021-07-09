// 문제

// 0,1로만 이루어진 문자열 S를 가지고 있다.
// 문자열 S에 있는 숫자를 전부 같게만드려고 한다.

// 할 수 있는 행동은 S에서 연속된 하나 이상의 숫자를 잡고 모두 뒤집는 것이다.
// => 뒤집는다 : 1-> 0, 0 -> 1

// ex)
// S = 0001100 일때
// 1. 전체를 뒤집는다.
//  => 1110011
// 2. 4~5문자를 뒤집는다
//  => 1111111
// 그런데 처음부터 4~5문자만 뒤집으면 한번에 0000000 이 된다.

// => S가 주어졌을 때 최소행동수

// 풀이
// 전부 1로 만든다 vs 전부 2로 만든다
// 둘 중 작은 값 리턴
// => 앞에서부터 세면서

function solution(S) {
  let all_zero = 0;
  let all_one = 0;

  if (S[0] === "0") {
    all_one = 1;
  } else {
    all_zero = 1;
  }

  for (let i = 1; i < S.length - 1; i++) {
    if (S[i] !== S[i + 1]) {
      if (S[i + 1] === "1") {
        all_zero++;
      } else {
        all_one++;
      }
    }
    console.log(all_zero, all_one);
  }
  return Math.min(all_zero, all_one);
}

console.log(solution("0001100"));
console.log(solution("1001010101"));
