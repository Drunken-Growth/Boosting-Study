// 프로그래머스 - 가장 긴 팰린드롬

function solution(s) {
  if (s.length === 0) return 0;
  let max = 1;
  for (let i = 0; i < s.length; i++) {
    let [j, cnt] = [1, 0];
    if (s[i] === s[i + 1]) {
      while (s[i - j] && s[i + j + 1]) {
        if (s[i - j] !== s[i + j + 1]) break;
        [cnt, j] = [cnt + 1, j + 1];
      }
      max = Math.max(max, 2 * (cnt + 1));
    }
    [j, cnt] = [1, 0];
    while (s[i - j] && s[i + j]) {
      if (s[i - j] !== s[i + j]) break;
      [cnt, j] = [cnt + 1, j + 1];
    }
    max = Math.max(max, 2 * cnt + 1);
  }
  return max;
}
