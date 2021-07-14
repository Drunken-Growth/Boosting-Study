/* 변형 문자열 */

function solution(line1, line2) {
  let ans = 0;
  for (let i = 0; i < line1.length; i++) {
    if (line1[i] === line2) {
      ans++;
      continue;
    }
    for (let j = 1; j <= line1.length - 1 - i; j++) {
      let l = 0;
      for (let k = i; k < line1.length; k += j) {
        if (line1[k] !== line2[l]) break;
        if (l === line2.length - 1) {
          ans++;
          break;
        }
        l++;
      }
    }
  }
  return ans;
}

console.log(solution("abbbcbbb", "bbb")); // 4
console.log(solution("abcabcabc", "abc")); // 4
console.log(solution("abacaba", "acb")); // 0
console.log(solution("aaa", "a")); // 3
console.log(solution("ababab", "ab")); // 6
console.log(solution("bbbb", "ab")); // 0
console.log(solution("abbbb", "ab")); // 4
console.log(solution("ababb", "aba")); // 1
