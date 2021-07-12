// 새로 풀이
function solution(S) {
  let answer = [];
  for (let i = 0; i < S.length; i++) {
    if (S[i] === "{") {
      answer.push("{");
    } else if (S[i] === "}") {
      if (answer[answer.length - 1] !== "{") {
        return 0;
      } else {
        answer.pop();
      }
    } else if (S[i] === "[") {
      answer.push("[");
    } else if (S[i] === "]") {
      if (answer[answer.length - 1] !== "[") {
        return 0;
      } else {
        answer.pop();
      }
    } else if (S[i] === "(") {
      answer.push("(");
    } else if (S[i] === ")") {
      if (answer[answer.length - 1] !== "(") {
        return 0;
      } else {
        answer.pop();
      }
    }
  }
  if (answer.length > 0) {
    return 0;
  }
  return 1;
}

// 기존 풀이
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
