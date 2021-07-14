/* 코딜리티 L7 - Nesting */

function solution(S) {
  let stack = [];
  for (let i = 0; i < S.length; i++) {
    if (stack.length && stack[stack.length - 1] === "(" && S[i] === ")") {
      stack.pop();
    } else stack.push(S[i]);
  }
  return stack.length ? 0 : 1;
}
