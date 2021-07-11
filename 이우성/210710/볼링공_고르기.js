// 첫번째
function solution(m, balls) {
  balls = balls.sort((a, b) => a - b);
  let answer = 0;

  for (let i = 0; i < balls.length; i++) {
    for (let j = i + 1; j < balls.length; j++) {
      if (balls[i] < balls[j]) {
        answer += 1;
      }
    }
  }

  return answer;
}

// 두번째
function solution(m, balls) {
  let n = balls.length;
  let balls_count = Array.from({ length: 11 }).map((v) => 0);
  for (let ball of balls) balls_count[ball] += 1;

  let answer = 0;

  for (let i = 1; i < m + 1; i++) {
    n -= balls_count[i];
    answer += balls_count[i] * n;
  }
  // console.log(balls_count);

  return answer;
}

console.log(solution(3, [1, 3, 2, 3, 2])); // 8
console.log(solution(5, [1, 5, 4, 3, 2, 4, 5, 2])); // 25

/**
 * 1. 오름차순 정렬을 한다.
 * 2. i보다 크고 다른 것만 카운팅한다.
 */
