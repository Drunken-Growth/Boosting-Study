/* 코딜리티 L11 - CountNonDivisible */

function solution(A) {
  // A의 원소개수 배열 생성
  let nums = new Array(A.length * 2 + 1).fill(0);
  A.forEach((n) => nums[n]++);

  // 각 원소의 약수개수 세기
  let factors = [];
  A.forEach((n, i) => {
    let sum = 0;
    for (let j = 1; j <= Math.sqrt(n); j++) {
      if (n % j === 0) {
        if (j !== Math.sqrt(n)) sum += nums[j] + nums[n / j];
        else sum += nums[j];
      }
    }
    factors.push(A.length - sum);
  });
  return factors;
}
