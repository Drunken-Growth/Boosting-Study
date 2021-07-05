function solution(S) {
  S = S.split("");
  const hash = { ")": "(", "]": "[", "}": "{" };
  const stack = [];

  for (let i = 0; i < S.length; i++) {
    if (stack[stack.length - 1] && stack[stack.length - 1] === hash[S[i]])
      stack.pop();
    else stack.push(S[i]);
  }
  return stack.length ? 0 : 1;
}
