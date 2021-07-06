// 문제

// 알파벳 대문자와 숫자 (0 ~ 9)로만 구성된 문자열이 입력으로 주어집니다.
// 이때 모든 알파벳을 오름차순으로 정렬하여 이어서 출력한 뒤에, 그 뒤에 모든 숫자를 더한 값을 이어서 출력합니다.
// 예를 들어 K1KA5CB7이라는 값이 들어오면 ABCKK13을 출력합니다.

// 입력
// 문자열 S (1 <= S의 길이 <= 10,000)

// 출력
// 문제에서 요구하는 정답

function solution(S) {
  let str = [];
  let num = 0;

  for (let i = 0; i < S.length; i++) {
    if (isNaN(S[i])) {
      str.push(S[i]);
    } else {
      num += Number(S[i]);
    }
  }

  str.sort();
  return str.join("") + num;
}

console.log(solution("K1KA5CB7")); // ABCKK13
console.log(solution("AJKDLSI412K4JSJ9D")); // ADDIJJJKKLSS20
