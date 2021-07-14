// 각경우에서 1,2,3 모두 더하고, 5일때 cnt 5넘으면 재귀종료

// 1차 -> timelimit로 일부테케 통과안함(4/10)
// -> memoization으로 업데이트 가능
// function solution(N) {
//   function rec(curVal, cnt) {
//     if (curVal === N) {
//       return cnt;
//     }
//     if (curVal > N) return;
//     return (
//       rec(curVal + 1, cnt + 1) +
//       rec(curVal + 2, cnt + 1) +
//       rec(curVal + 3, cnt + 1)
//     );
//   }
//   return rec(0);
// }

// 3차 재귀 + memoization
function solution(N) {
  let memo = [];

  function rec(step) {
    if (step === 0) return 1;
    if (step < 0) return 0;

    if (memo[step]) return memo[step];
    memo[step] = rec(step - 1) + rec(step - 2) + rec(step - 3);
    return memo[step];
  }

  return rec(N);
}

// 2차 -> DP 방식 {Pass}
// n번째 경우의 수는 n-1번째 까지 온다음 1칸 점프 + n-2번째 까지온다음 2칸 점프 + n-3번째까지온다음 3칸점프 이다.
// f(n) = f(n-1) + f(n-2) + f(n-3)

// function solution(N) {
//   let memo = [0, 1, 2, 4];
//   function rec(n) {
//     if (memo[n]) return memo[n];

//     memo[n] = rec(n - 1) + rec(n - 2) + rec(n - 3);
//     return memo[n];
//   }
//   return rec(N);
// }
console.log(solution(5));
// console.log(solution(4));
// console.log(solution(3));
// console.log(solution(2));
// console.log(solution(1));

// rec(1);
// rec(2)
//    rec(3) rec(4) rec(5)
// rec(3)
// rec(4)
// rec(2);

// rec(3);
//  rec(4) rec(5) rec(6)
