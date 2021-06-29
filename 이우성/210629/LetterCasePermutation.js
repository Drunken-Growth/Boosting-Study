const letterCasePermutation = function (s) {
  let answer = [""];

  for (let i = 0; i < s.length; i++) {
    let temp = [];

    for (let j = 0; j < answer.length; j++) {
      // 알파벳인 경우
      if (/[a-z|A-z]/g.test(s[i])) {
        temp.push(answer[j] + s[i].toLowerCase());
        temp.push(answer[j] + s[i].toUpperCase());
      } else {
        // 숫자면 바로 추가
        temp.push(answer[j] + s[i]);
      }
    }

    // [a, A] => [a1, A1] => [a1b, a1B, A1b, A1B] 형태로 가게한다.
    answer = temp;
  }

  return answer;
};
