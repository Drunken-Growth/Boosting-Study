// 약수를 구하는 문제 (개수)
// memoization
// N을 순회 (i는 1에서 루트n까지)  36 =>  1 2 3 4 6  까지
// i와 i로나눈 값 모두 N의 약수이다. i === N/i 일 때 중복되어서 들어가므로 하나를 빼준다.

function solution(N) {
  let primes = [];
  for (let i = 1; i <= Math.sqrt(N); i++) {
    if (N % i === 0) {
      primes.push(i);
      primes.push(N / i);
    }
    if (i === Math.sqrt(N)) primes.pop();
  }

  return primes.length;
}
