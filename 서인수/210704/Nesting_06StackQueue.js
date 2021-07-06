// 전형적인 스택문제

function solution(S) {
  let stack = [];
  for (let i = 0; i < S.length; i++) {
    let b = S[i];
    if (b === "(") {
      stack.push(b);
    } else {
      if (stack.length === 0) return 0;
      stack.pop();
    }
  }
  return stack.length === 0 ? 1 : 0;
}
