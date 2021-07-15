// 문제이해
// 가능한 패스워드 중 가장 긴 패스워드를 리턴하는 문제
// 1. 패스워드는 알파벳,숫자로만 이루어져있으며.
// 2. 알파벳의 개수는 짝수이고 숫자의 개수는 홀수이다.

// 문제접근
// 결국 각 패스워드의 모든 자리수를 완전탐색하며, 알파벳개수와 숫자의 개수를 각각 세어야한다.(이중for문)

// point
// 정규표현식으로 검사하기

function solution(S) {
  let pwords = S.split(" ");
  let max = -1;

  for (let i = 0; i < pwords.length; i++) {
    let acnt = 0;
    let dcnt = 0;
    if (checkReg(pwords[i])) {
      for (let j = 0; j < pwords[i].length; j++) {
        let w = pwords[i][j];
        let alpha = /^[A-Za-z]*$/;
        let digit = /^[0-9]*$/;
        if (alpha.test(w)) {
          acnt++;
        }
        if (digit.test(w)) {
          dcnt++;
        }
      }
      if (acnt % 2 !== 0 || dcnt % 2 !== 1) continue;
      max = Math.max(max, acnt + dcnt);
    }
  }

  return max;

  function checkReg(str) {
    let reg = /^[A-Za-z0-9]*$/;
    return reg.test(str);
  }
}

console.log(solution("test 5 a0A pass007 ?xy1")); // 7
console.log(solution("a"));
