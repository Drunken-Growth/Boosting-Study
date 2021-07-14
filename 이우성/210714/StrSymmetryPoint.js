function solution(S) {
  if (S.length % 2 === 0) return -1;

  let answer = parseInt(S.length / 2);
  for (let i = 0; i < answer; i++) {
    if (S[i] !== S[S.length - 1 - i]) {
      return -1;
    }
  }

  return answer;
}

/**
 * 존재하지 않으면 -1 반환
 *
 */
