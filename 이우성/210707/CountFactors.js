function solution(N) {
  let answer = [];

  for (let i = 1; i <= Math.sqrt(N); i++) {
    if (N % i === 0) {
      answer.push(i, N / i);
    }
  }

  if (Math.sqrt(N) === parseInt(Math.sqrt(N))) {
    answer.pop();
  }

  return answer.length;
}
