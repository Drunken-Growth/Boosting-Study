// A, B 두 사람이 볼링을 치고 있다.
// 서로 무게가 다른 볼링공을 고르려고 한다.
// 볼링공은 총 N개가 있고 볼링공마다 무게가 적혀 있고, 번호는 1번부터 순서대로 부여된다.
// 같은 무게의 공이 여러개 있을 수 있지만, 다른 공으로 간주한다.
// 볼링공의 무게는 1~M 까지 자연수로 존재한다.

// N = 5, M = 3 이고, 각각 무게가 1, 3, 2, 3, 2라면 차례대로 1~5번이 부여된다.
// 두 사람이 고를 수 있는 볼링공 번호의 조합
// (1,2) (1,3) (1,4) (1,5) (2,3) (2,5) (3,4) (4,5)

// 조합임? 이해는 안되지만 A,B 가 선택한 (무게 1,무게 3) = (무게 3, 무게 1) 동일하게 취급
function solution(N, M, balls) {
  balls.sort((a, b) => a - b);
  const ball_count = Array(M + 1).fill(0);

  for (let ball_weight of balls) {
    ball_count[ball_weight]++;
  }

  let answer = 0;
  for (let i = 1; i < ball_count.length; i++) {
    N -= ball_count[i];
    answer += ball_count[i] * N;
  }

  return answer;
}

console.log(solution(5, 3, [1, 3, 2, 3, 2])); // 8
console.log(solution(8, 5, [1, 5, 4, 3, 2, 4, 5, 2])); // 25
