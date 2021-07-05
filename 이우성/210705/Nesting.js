function solution(S) {
  let count = 0;

  for (let i = 0; i < S.length; i++) {
    if (S[i] === "(") {
      count += 1;
    } else {
      if (count === 0 && S[i] === ")") {
        return 0;
      }
      count -= 1;
    }
  }

  return count === 0 ? 1 : 0;
}
