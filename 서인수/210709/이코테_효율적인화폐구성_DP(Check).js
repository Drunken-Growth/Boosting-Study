// 문제이해
// target값과 coin값의 배열이 주어질 때,
// target값을 만들 수 있는 최소한의 코인의 개수를 구하는문제.

// 접근
// target값을 가장 큰 코인 순으로 나누어 주고, 몫은 cnt로 나머지는 curTarget으로 바꿔준다.

// Why DP?
// 점화식 가능한가?
// 1. 큰문제 작은문제 쪼개지는가?
// 2. 작은문제 반복해서 큰문제해결에 사용되는가?

// 1차 문제풀이 (DP방법 떠오르지 않아, 생각나는 아이디어로 풀어봄)
function solution(target, coins) {
  let cnt = 0;
  let curTarget = target;
  coins.sort((a, b) => b - a);
  for (let i = 0; i < coins.length; i++) {
    let q = Math.floor(curTarget / coins[i]);
    let r = curTarget % coins[i];

    cnt += q;
    curTarget = r;
  }
  if (curTarget !== 0) return -1;
  return cnt;
}

// 점화식 (이헤못함 ..)
// a(i) = Min( a(i), a(i-k)+1 )
function DPsolution(target, coins) {
  let memo = Array.from({ length: coins.length }, () => 10001); // 도달할 수 없는 최대 값으로 구성 (최대 10000원)
  // what.. ?
}
console.log(solution(15, [2, 3]));
console.log(solution(4, [3, 5, 7]));
console.log(solution(11, [3, 5, 7]));
console.log(solution(7, [2, 3, 5]));
console.log(solution(20, [2, 3]));
