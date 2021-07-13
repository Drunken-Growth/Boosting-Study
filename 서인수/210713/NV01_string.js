// 문제이해
// m문자열에서 k문자열을 차례대로 제거한 나머지를 return 한다.

// 문제접근
// 1. m을 순회
// 2.1 m[i] === k[start]
//  start++
// 2.1 m[i] !== k[start]
// 2.2 push(m[i])

// 2.3 start === k.length
// 2.4 나머지 push(나머지m-)

function solution(m, k) {
  let kIdx = 0;
  let result = "";
  for (let i = 0; i < m.length; i++) {
    if (m[i] !== k[kIdx]) result += m[i];
    else kIdx++;
    if (kIdx === k.length) {
      result += m.slice(i + 1);
      break;
    }
  }
  return result;
}

console.log(solution("kkaxbycyz", "abc")); // kkxyyz
console.log(solution("acbbcdc", "abc")); // cbdc
