/* 미니 테트리스 */

function solution(m, v) {
  let game = [v[0]];

  for (let i = 1; i < v.length; i++) {
    let last = game.length - 1;
    let cur = v[i];
    let max = 0;
    if (last >= 0 && game[last] + cur <= m) {
      while (game[last] + cur <= m) {
        max = Math.max(max, game[last]);
        last--;
      }
      game[last + 1] = max + cur;
    } else {
      game.push(v[i]);
    }
  }
  return game.length;
}

console.log(solution(4, [2, 3, 1])); // 2
console.log(solution(4, [3, 2, 3, 1])); // 3
console.log(solution(5, [1, 1, 1, 1, 1])); // 1
console.log(solution(10, [1, 9, 1, 1, 1])); // 2
console.log(solution(10, [2, 9, 1, 1, 1])); // 3
console.log(solution(10, [3, 8, 2, 1, 1])); // 2
console.log(solution(10, [3, 8, 2, 1, 2])); // 3
