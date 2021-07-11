function solution(coins) {
  let coins_arr = coins.sort((a, b) => a - b);
  let answer = 1;

  for (let i = 0; i < coins_arr.length; i++) {
    console.log(answer, coins_arr[i]);
    if (answer < coins_arr[i]) {
      break;
    }
    answer += coins_arr[i];
  }

  return answer;
}

console.log(solution([3, 2, 1, 1, 9])); // 8
console.log(solution([3, 5, 7])); // 1
console.log(solution([1, 2, 3, 4, 7, 100])); // 18

/**
 * 1. 오름차순 정렬을 한다. => [1, 1, 2, 3, 9]
 * 2. 정렬한 배열을 더해주면서 만약 4 + 3 = 7이면 7까지 모든 수를 만들 수 있다.
 * 4. 반례
 *  4.1 [1,2,3,4,7, 100]
 */
