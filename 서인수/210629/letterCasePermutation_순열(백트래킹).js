var letterCasePermutation = function (s) {
  // 풀이방법
  // 모든 경우의 수를 탐색할 수 있도록 dfs이용

  // 1. rec재귀함수 - 현재까지의 글자와 idx를 받음
  // 1-1) idx가 s.length 일 때 글자가 완성되므로 result에 담고 재귀종료
  // 1-2) 현재 해당하는 글자가 알파벳이라면
  //      1-2-1) 현재글자에 대소문자 각각 추가하고 idx+1
  //      1-2-2) 숫자라면 숫자 추가하고 idx + 1
  let result = [];

  function rec(word, idx) {
    if (idx === s.length) {
      result.push(word);
      return;
    }

    let c = s[idx];
    if (isNaN(c)) {
      rec(word + c.toLowerCase(), idx + 1);
      rec(word + c.toUpperCase(), idx + 1);
    } else {
      rec(word + c, idx + 1);
    }
  }
  rec("", 0);
  return result;
};
