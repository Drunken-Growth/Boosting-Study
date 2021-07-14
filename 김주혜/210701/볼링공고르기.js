// 이코테 - 볼링공 고르기 (그리디)

function solution(n, m, balls) {
  balls = balls.sort((a, b) => a - b);
  balls = removeSame(balls);
  let ans = 0;
  for (let i = 0; i < balls.length; i++) {
    let cnt = 0;
    for (let j = i + 1; j < balls.length; j++) {
      cnt += balls[j][1];
    }
    ans += balls[i][1] * cnt;
  }
  return ans;
}

function removeSame(balls) {
  let arr = [[balls[0], 1]];
  for (let i = 1; i < balls.length; i++) {
    if (arr[arr.length - 1][0] === balls[i]) {
      arr[arr.length - 1][1]++;
    } else arr.push([balls[i], 1]);
  }

  return arr;
}

console.log(solution(5, 3, [1, 3, 2, 3, 2]));
console.log(solution(8, 5, [1, 5, 4, 3, 2, 4, 5, 2]));
