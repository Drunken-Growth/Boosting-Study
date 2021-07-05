/* 프로그래머스 - 짝지어 제거하기 */

function solution(s) {
  if (s.length % 2 !== 0) return 0;
  let i = 1;
  let stack = [s[0]];
  while (i < s.length) {
    if (stack[stack.length - 1] === s[i]) stack.pop();
    else stack.push(s[i]);
    i++;
  }
  return stack.length === 0 ? 1 : 0;
}
