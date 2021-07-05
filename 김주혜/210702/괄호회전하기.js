/* 프로그래머스 - 괄호 회전하기 */

function solution(s) {
  let cnt = 0;
  for (let i = 0; i < s.length; i++) {
    if (isPaired(s)) cnt++;
    s = s.slice(1) + s[0];
  }
  return cnt;

  function isPaired(str) {
    const hash = { "(": ")", "[": "]", "{": "}" };
    let stack = [str[0]];
    for (let i = 1; i < str.length; i++) {
      if (hash[stack[stack.length - 1]] === str[i]) stack.pop();
      else stack.push(str[i]);
    }
    return stack.length === 0;
  }
}
