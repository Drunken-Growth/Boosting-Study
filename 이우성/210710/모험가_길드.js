function solution(N, fears) {
  fears = fears.sort((a, b) => a - b);
  let group = 0;
  let count = 0;

  for (let i = 0; i < fears.length; i++) {
    count += 1;

    if (i <= count) {
      group += 1;
      count = 0;
    }
  }

  return group;
}

console.log(solution(5, [2, 3, 1, 2, 2]));
console.log(solution(0, []));
console.log(solution(1, [1]));
console.log(solution(2, [4, 1]));
console.log(solution(5, [5, 5, 5, 5, 5]));

/**
 * 1. 주어진 공포도를 오름차순 정렬한다. => [1, 2, 2, 2, 3]
 * 2. 그룹수의 최댓값을 구하므로, 최소한의 인원수로 그룹을 찾는다.
 * 3. 반례
 *  3.1 [4, 1]
 *  3.2 []
 *  3.3 [1]
 *  3.4 [5, 5, 5, 5, 5]
 *  3.5 [6, 6, 6, 5, 4, 3, 2, 1, 1, 1, 1, 1]
 */
