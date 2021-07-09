// 문제이해
// '5,3,2로 나누기 && 1을 빼기' 총 4가지 연산을 이용하여 1을 만드는 최소횟수를 구하는 문제

//why DP
// 피보나치와 같이 특정 수의 1로 만드는 최소횟수를 기억한다면, 다음 수가 그 수에 도착했을 때, 같은 결과를 도출한다.
// 1. 큰 문제를 작은문제로
// 2. 작은 문제가 큰 문제에 그대로 이용

// function solution(N){

// 2차시도 (by재귀, 탑다운)
// let memo = [];
// function makeOne(n) {
//   //   console.log([n, memo]);
//   if (n === 1) return 0;
//   if (memo[n]) return memo[n];

//   // 1빼는 경우
//   memo[n] = makeOne(n - 1) + 1;
//   if (n % 5 === 0) {
//     let temp = makeOne(n / 5) + 1;
//     memo[n] = Math.min(memo[n], temp);
//   }
//   if (n % 3 === 0) {
//     let temp = makeOne(n / 3) + 1;
//     memo[n] = Math.min(memo[n], temp);
//   }
//   if (n % 2 === 0) {
//     let temp = makeOne(n / 2) + 1;
//     memo[n] = Math.min(memo[n], temp);
//   }
//   return memo[n];
// }

// console.log(makeOne(6, 0)); //3

// by for문 바텁업
let memo = [0, 0];
function makeOneByFor(n) {
  for (let i = 2; i <= n; i++) {
    memo[i] = memo[i - 1] + 1; // 2
    if (i % 2 === 0) {
      memo[i] = Math.min(memo[i], memo[i / 2] + 1); //3
    }
    if (i % 3 === 0) {
      memo[i] = Math.min(memo[i], memo[i / 3] + 1);
    }
    if (i % 5 === 0) {
      memo[i] = Math.min(memo[i], memo[i / 5] + 1);
    }
  }
  console.log([n, memo]);
  return memo[n];
}
console.log(makeOneByFor(30));

// 1차시도 ... cnt를 저장해야하는데 잘못된 방식으로 접근
// let memo = [];
// function makeOne(n, cnt) {
//   console.log([n, cnt, memo]);
//   if (n === 1) return cnt; // 3
//   if (memo[n]) return memo[n];
//   let [a, b, c, d] = [987654321, 987654321, 987654321, 987654321];
//   if (n % 5 === 0) {
//     a = makeOne(n / 5, cnt + 1); // (5,2) // (1,3)
//   }
//   if (n % 3 === 0) {
//     b = makeOne(n / 3, cnt + 1);
//   }
//   if (n % 2 === 0) {
//     c = makeOne(n / 2, cnt + 1);
//   }
//   d = makeOne(n - 1, cnt + 1); // (25 ,1)
//   //   console.log(a, b, c, d);
//   memo[n] = Math.min(a, b, c, d);

//   return memo[n];
// }

// }
