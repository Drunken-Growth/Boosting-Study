// A string S consisting of N characters is called properly nested if:

// S is empty;
// S has the form "(U)" where U is a properly nested string;
// S has the form "VW" where V and W are properly nested strings.

// N개 문자 구성된 S 배열이 다음 조건을 만족하면 중첩 잘됐다고 한다.
// 1. 비거나
// 2. (U), U도 중첩
// 3. 중첩 + 중첩

// 만족하면 1, 아니면 0 리턴해라~!

// 풀이
// 얘도 stack

function solution(S) {
  let stack = [];

  for (let i = 0; i < S.length; i++) {
    if (S[i] === "(") {
      stack.push("(");
    } else {
      if (stack[stack.length - 1] === "(") {
        stack.pop();
      } else {
        return 0;
      }
    }
  }
  return stack.length === 0 ? 1 : 0;
}

console.log(solution("(()(())())")); // 1
console.log(solution("())")); // 0
