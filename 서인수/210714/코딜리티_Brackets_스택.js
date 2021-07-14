// VeryEasy => 스택기본문제 다시안풀어봐도 풀수 있을정도

//풀이방법

// 1. { , [ , ( 일 경우 스택에 추가
// 2. 아닐 경우, stack 마지막 값과 비교,
// 2.1 다르다면 0
// 3. 다 마치고 나서 stack에 남는다면 0, 아니라면 1

let bracketPair = {
  "{": "}",
  "[": "]",
  "(": ")",
};
let stack = [];

function solution(S) {
  for (let i = 0; i < S.length; i++) {
    if (S[i] === "{" || S[i] === "[" || S[i] === "(") {
      stack.push(S[i]);
    } else {
      if (stack.length === 0) return 0;
      let pop = stack.pop();
      if (bracketPair[pop] !== S[i]) return 0;
    }
  }

  return stack.length === 0 ? 1 : 0;
}
