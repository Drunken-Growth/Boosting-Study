// A string S consisting of N characters is considered to be properly nested
// if any of the following conditions is true:

// S is empty;
// S has the form "(U)" or "[U]" or "{U}" where U is a properly nested string;
// S has the form "VW" where V and W are properly nested strings.
// For example, the string "{[()()]}" is properly nested but "([)()]" is not.

// 문제
// N개의 문자로 구성된 문자열 S는 다음 조건들을 하나라도 만족하면 적절하다고 여겨진다.
// 1. 빈문자
// 2. U를 적절한 문자열이라 하면  "(U)" or "[U]" or "{U}" 이런 형태일 때
// 3. V, W이 적절한 문자열이라면 V + W도 됨
// 적절하면 1, 아니면 0 리턴

// S를 배열로 만드는 split 을 사용했는데 시간초과 떴음!
// => 앞으로 굳이 안나눠도 되는건 나누지 말자!
function solution(S) {
  let stack = [];

  for (let i = 0; i < S.length; i++) {
    const el = S[i];
    if (el === "(" || el === "[" || el === "{") {
      stack.push(el);
    } else if (
      (el === ")" && stack[stack.length - 1] === "(") ||
      (el === "]" && stack[stack.length - 1] === "[") ||
      (el === "}" && stack[stack.length - 1] === "{")
    ) {
      stack.pop();
    } else {
      return 0;
    }
  }

  return stack.length === 0 ? 1 : 0;
}

console.log(solution("{[()()]}")); // 1
console.log(solution("([)()]")); // 0
