/* 이코테 - 모험가길드 (그리디) */

function solution(arr) {
  arr.sort((a, b) => a - b);
  let cnt = 0;
  let res = 0;

  while (arr.length) {
    let cur = arr.pop();
    cnt++;
    if (cnt >= cur && cnt > 1) {
      cnt -= cur;
      res++;
    }
  }
  return res;
}

console.log(solution([2, 3, 1, 2, 2])); // 2
console.log(solution([2, 2, 1])); // 1
