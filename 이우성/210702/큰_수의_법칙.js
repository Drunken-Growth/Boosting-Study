function solution(rules, arr) {
  arr.sort((a, b) => b - a);

  let result = 0;
  let [N, M, K] = rules;
  let [max, sub] = arr;

  while (true) {
    for (let i = 0; i < K; i++) {
      if (M === 0) {
        break;
      }

      result += max;
      M = M - 1;
    }

    if (M === 0) {
      break;
    }

    result += sub;
    M = M - 1;
  }

  return result;
}

console.log(solution([5, 8, 3], [2, 4, 5, 4, 6])); // 46
console.log(solution([5, 7, 2], [3, 4, 3, 4, 3])); // 28

/*
1. 정렬을 한다.
2. 가장 큰 숫자를 K번까지만 더할 수 있다.
3. 그리고 두번째로 큰 수를 한번 더 더한다.
*/
