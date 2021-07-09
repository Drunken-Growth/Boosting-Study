// 문제

// N개의 동전이 있다.
// N개의 동전을 이용해 만들 수 없는 양의 정수 금액 중 최솟값을 구해라

// N = 5이고, 3, 2, 1, 1, 9 짜리 동전이 있을 때 만들 수 없는 양의 정수 금액 중 최솟값은 8원이다.

// 풀이
// 불가능한 금액을 1원부터 시작한다.
// 오름차순으로 동전들을 정렬한다.
// 처음부터 시작해서 만약 불가능한 금액 < 코인이라면 바로 브레이크 -> 리턴
// 불가능한 금액 > 코인이라면 불가능한 금액을 만들 수 있다는 뜻임 -> 불가능한 금액 + 현재 동전 더해줌

function solution(N, coins) {
  coins.sort((a, b) => a - b);

  let answer = 1;

  for (let coin of coins) {
    if (answer < coin) {
      break;
    }
    answer += coin;
  }
  return answer;
}

console.log(solution(5, [3, 2, 1, 1, 9])); // 8
console.log(solution(10, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // 8
