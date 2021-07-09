// 데이빗은 집에 계단이 있는데, 한 번에 1,2,3 칸을 올라가길 좋아한다.
// s = 계단의 수, 그 다음부터
// n = 각 계단의 층 수
// 올라 갈 수 있는 방법의 수를 리턴

// 조합 확인 용
function stepPerms(n) {
  const move = [1, 2, 3];
  const answer = [];
  function recur(num, arr = []) {
    for (let x of move) {
      if (num - x > 0) {
        recur(num - x, arr.concat(x));
      } else if (num - x === 0) {
        return answer.push(arr);
      }
    }
  }
  recur(n);
  // console.log(answer);
  return answer.length;
}

// 정답 용
function stepPerms(n) {
  const memo = Array(n + 1).fill(0);
  memo[1] = 1;
  memo[2] = 2;
  memo[3] = 4;

  for (let i = 4; i <= n; i++) {
    memo[i] = memo[i - 1] + memo[i - 2] + memo[i - 3];
  }

  return memo[n];
}

console.log(stepPerms(1)); // 1
console.log(stepPerms(2)); // 2
console.log(stepPerms(3)); // 4
console.log(stepPerms(4)); // 7
console.log(stepPerms(5)); // 13
console.log(stepPerms(6)); // 24
// -> A(n) = A(n-1) + A(n-2) + A(n-3)
console.log(stepPerms(7)); // 44
// console.log(stepPerms(35)); // 44
