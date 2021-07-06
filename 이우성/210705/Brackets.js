function solution(S) {
  let stack = [];

  for (let i = 0; i < S.length; i++) {
    if (S[i] === "(") {
      stack.push(")");
    } else if (S[i] === "{") {
      stack.push("}");
    } else if (S[i] === "[") {
      stack.push("]");
    } else {
      if (stack.length === 0 || S[i] !== stack[stack.length - 1]) {
        return 0;
      }
      stack.pop();
    }
  }

  return stack.length === 0 ? 1 : 0;
}

/**
 * 문제 파악
 * 1. 예제 "(U)" or "[U]" or "{U}"는 U가 적절하게 중첩되어 있다.
 * 2. 적절하게 잘 중첩되어 있으면 1, 그렇지 않으면 0을 반환한다.
 *
 * 수도 코드
 * 1. 여는 괄호가 나오면 바로 닫는 괄호를 넣어준다.
 * 2. 그리고 문자열 닫는 괄호가 나오기 시작할 때, stack의 맨 끝 부분부터 비교해나아간다.
 */
