/* 문자열 암호화 */

function solution(m, k) {
  let ans = "";
  let p = 0;
  for (let i = 0; i < m.length; i++) {
    if (m[i] === k[p]) {
      p++;
      continue;
    } else if (k[p] === undefined) {
      ans += m.substring(i);
      break;
    }
    ans += m[i];
  }
  return ans;
}

console.log(solution("kkaxbycyz", "abc")); // kkxyyz
console.log(solution("acbbcdc", "abc")); // cdbc
console.log(solution("axxczzbbyycdzzc", "xyz")); // axczzbbycdzc
