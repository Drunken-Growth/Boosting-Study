// 문제

// 각 자리가 숫자(0부터 9)로만 이루어진 문자열 S가 주어졌을 때, 왼쪽부터 오른쪽으로 하나씩 모든 숫자를 확인하며
// 숫자 사이에 'x' 혹인 '+' 연산자를 넣어 결과적으로 만들어 질수 있는 가장 큰 수를 구하는 프로그램을 작성
// * 단, 모든 연산은 왼쪽에서부터 순서대로!!!

// ex)
// 02984 => ((((0 + 2) * 9) * 8) * 4) = 576

// 풀이
// 0, 1 나올 땐 더하고, 나머진 곱하면 됨!

function solution(S) {
  let result = Number(S[0]);

  for (let i = 1; i < S.length; i++) {
    const num = Number(S[i]);

    if (result <= 1 || num <= 1) {
      result += num;
    } else {
      result *= num;
    }
  }

  return result;
}

console.log(solution("02984")); // 576
console.log(solution("567")); // 210
