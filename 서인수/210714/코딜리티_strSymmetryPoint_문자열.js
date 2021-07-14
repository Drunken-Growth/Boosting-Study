// 펠린드롬의 중심을 찾는 문제
function solution(S) {
  if (S.length === 1) return 0;
  if (S.length % 2 === 0) return -1;

  for (let i = 0; i < Math.floor(S.length / 2); i++) {
    if (S[i] !== S[S.length - 1 - i]) return -1;
  }
  return Math.floor(S.length / 2);
}

console.log(solution("racecar")); //3
console.log(solution(" ")); // 0
