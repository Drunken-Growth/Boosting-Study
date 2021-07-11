// 첫번째
function solution(s) {
  s = s.split("").sort();
  let answer = 1;

  for (let i = 0; i < s.length; i++) {
    if (s[i - 1] === "0" || s[i - 1] === "1") {
      answer += Number(s[i]);
    } else {
      answer *= Number(s[i]);
    }
  }

  return answer;
}

// 두번째
function solution(s) {
  let answer = Number(s[0]);

  for (let i = 1; i < s.length; i++) {
    let num = Number(s[i]);

    if (answer <= 1 || num <= 1) {
      answer += num;
    } else {
      answer *= num;
    }
  }

  return answer;
}

console.log(solution("02984")); // 576
console.log(solution("567")); // 210
console.log(solution("0000")); // 0
console.log(solution("0010")); // 1
console.log(solution("000486")); // 192
console.log(solution("001486")); // 240

/**
 * 1. 오름차순으로 정렬을 한다.
 * 2. 첫번째 숫자가 0이나 1이면 더하고, 아니면 무조건 곱한다.
 * 3. 반례 케이스 1인 경우를 생각해야 한다.
 */
