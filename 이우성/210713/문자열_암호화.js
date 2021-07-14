function solution(m, k) {
  let answer = "";
  let idx = 0;

  for (let i = 0; i < m.length; i++) {
    if (m[i] !== k[idx]) {
      answer += m[i];
    } else if (m[i] === k[idx]) {
      idx += 1;
    } else if (idx === k.length) {
      answer += m.substring(i);
    }
  }

  return answer;
}

console.log(solution("kkaxbycyz", "abc")); // kkxyyz
console.log(solution("acbbcdc", "abc")); // cbdc

/*
1. 인덱스를 계속 이동해야 한다. => 원포인트
2. 문자를 계속 잘라야함 => substring, substr, slice
*/
