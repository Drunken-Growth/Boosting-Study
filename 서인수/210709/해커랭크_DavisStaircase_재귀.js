// 각경우에서 1,2,3 모두 더하고, 5일때 cnt 5넘으면 재귀종료

// 1차 -> timelimit로 일부테케 통과안함(4/10)
function solution(N) {
  let cnt = 0;
  function rec(curVal) {
    if (curVal === N) {
      cnt++;
      return;
    }
    if (curVal > N) return;
    rec(curVal + 1);
    rec(curVal + 2);
    rec(curVal + 3);

    return cnt;
  }
  return rec(0);
}
console.log(solution(5));

// rec(1);
// rec(2)
//    rec(3) rec(4) rec(5)
// rec(3)
// rec(4)
// rec(2);

// rec(3);
//  rec(4) rec(5) rec(6)
