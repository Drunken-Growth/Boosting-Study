// 프로그래머스 - 영어 끝말잇기

function solution(n, words) {
  for (let i = 0; i < words.length - 1; i++) {
    let [cur, next] = [words[i], words[i + 1]];
    if (cur[cur.length - 1] !== next[0] || words.slice(0, i).includes(next)) {
      return [((i + 1) % n) + 1, parseInt((i + 1) / n) + 1];
    }
  }
  return [0, 0];
}
