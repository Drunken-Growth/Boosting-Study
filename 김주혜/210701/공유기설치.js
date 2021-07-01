// 백준 2110 공유기 설치

function solution(input) {
  // var input = require("fs").readFileSync("/dev/stdin").toString();
  var [nc, ...arr] = input.split("\n");
  let [N, C] = nc.split(" ").map((el) => Number(el));
  arr = arr.map((el) => Number(el));
  arr.sort((a, b) => a - b);

  let dist = 0;
  let [left, right] = [0, arr[arr.length - 1] - arr[0]];
  let mid = parseInt((left + right) / 2);
  while (left <= right) {
    mid = parseInt((left + right) / 2);
    if (isAble(mid)) {
      dist = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  console.log(dist);
  return;

  // mid거리로 설치했을 때 다 커버 가능한지
  function isAble(mid) {
    let cur = arr[0];
    let cnt = 1;
    for (let i = 1; i < N; i++) {
      if (arr[i] - cur >= mid) {
        cur = arr[i];
        cnt++;
      }
    }
    if (cnt >= C) return true;
    return false;
  }
}

let input = `5 3
1
2
8
4
9`;
console.log(solution(input)); // 3

input = `5 2
1
2
8
4
9`;
console.log(solution(input)); // 8

input = `3 3
1
4
6`;
console.log(solution(input)); // 2
