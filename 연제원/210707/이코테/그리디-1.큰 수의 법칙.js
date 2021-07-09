// 다양한 수로 이루어진 배열이 있을 때, 주어진 수들을 M번 더하여 가장 큰 수를 만드는 법칙인 큰수의 법칙이 있다.
// 단, 배열의 특정한 인덱스(번호)에 해당하는 수가 연속해서 K번을 초과하여 더해질 수 없는 것이 특징이다.

// 예로, [2, 4, 5, 4, 6] 배열이 있을 때, M : 8, K : 3 이라고 하자.
// 특정한 인덱스의 수가 연속해서 세번 까지만 더해질 수 있으므로 6+6+6+5+6+6+6+5 = 46이 된다.

// 단, 서로 다른 인덱스에 해당하는 수가 같은 경우에도 서로 다른 것이라고 간주한다.
// 예로, [3,4,3,4,3] 배열이 있을 때, M : 7, K : 2 라고 하자.
// 4+4+4+4+4+4+4 = 28 이 가능, 정답

function solution(N, arr, M, K) {
  arr.sort((a, b) => b - a);

  let sum = 0;
  let count = 0;
  for (let i = 1; i <= M; i++) {
    count++;
    if (count === K) {
      sum += arr[1];
      count = 0;
    } else {
      sum += arr[0];
    }
  }
  return sum;
}

// 시간 더 압축
function solution(N, arr, M, K) {
  arr.sort((a, b) => b - a);

  const first = arr[0];
  const second = arr[1];

  let count = parseInt(M / (K + 1)) * K;
  count += parseInt(M % (K + 1));

  const sum = count * first + (M - count) * second;
  return sum;
}

console.log(solution(5, [2, 4, 5, 4, 6], 8, 3)); // 46
