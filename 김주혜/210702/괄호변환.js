/* 프로그래머스 - 괄호 변환 
  Merge sort가 생각나는 문제..
*/

function solution(p) {
  if (isPaired(p)) return p;
  return mergeStr(p);

  // 문자열 합치기 (Merge)
  function mergeStr(str) {
    let [u, v] = devideStr(str);
    if (str.length === 0) return "";
    if (isPaired(u)) return u + mergeStr(v);
    else return "(" + mergeStr(v) + ")" + changeStr(u.substr(1, u.length - 2));
  }

  // ( <-> ) 변환
  function changeStr(str) {
    let changed = "";
    for (let i = 0; i < str.length; i++) {
      if (str[i] === "(") changed += ")";
      else changed += "(";
    }
    return changed;
  }

  // 균형잡히게 분리 (Devide)
  function devideStr(str) {
    let u = "";
    let v = str;
    for (let i = 0; i < str.length; i += 2) {
      u += str[i] + str[i + 1];
      v = v.slice(2);
      if (isBalanced(u)) break;
    }
    return [u, v];
  }

  // 균형잡힌 문자열인지 확인
  function isBalanced(str) {
    let [left, right] = [0, 0];
    for (let i = 0; i < str.length; i++) {
      if (str[i] === "(") left++;
      else right++;
    }
    return left === right;
  }

  // 올바른 문자열인지 확인
  function isPaired(str) {
    let stack = [str[0]];
    for (let i = 1; i < str.length; i++) {
      if (stack[stack.length - 1] === "(" && str[i] === ")") stack.pop();
      else stack.push(str[i]);
    }
    return stack.length === 0;
  }
}
