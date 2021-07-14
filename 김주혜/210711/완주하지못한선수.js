/* 프로그래머스 - 완주하지 못한 선수 (해시) */

function solution(participant, completion) {
  let parts = {};
  participant.forEach((p) => (parts[p] ? parts[p]++ : (parts[p] = 1)));
  completion.forEach((c) => parts[c]--);
  for (let i in parts) {
    if (parts[i] > 0) return i;
  }
}
