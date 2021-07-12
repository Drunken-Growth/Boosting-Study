/* 코딜리티 - Chocolates By Numbers */

function solution(N, M) {
  const getGCD = (a, b) => (b > 0 ? getGCD(b, a % b) : a);
  return N / getGCD(N, M);
}
