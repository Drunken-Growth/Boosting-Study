// 문제이해
// 주어진 배열에서 최소 좌우 1칸 이상 띄어진 값들만을 선택할 때, 최대합을 구하는 문제

// why DP
// 1. 큰 문제 작은문제로?  => 흠...
//   -> 앞에서 부터의 최대값을 하나씩 늘려가며 구한다. (N개의 문제로 쪼갬)
// 2. 작은 문제가 큰 문제의 변화없이 재사용 하는가? => 흠...
//    -> i번째의 최대합의 계산은 i-1번째 값과 i-2번째의 값을 필요로 한다.

// 풀이방법 (DP?...그냥 되는대로 풀어버렸다.)
// 1. foodList 순회, i 번째의 선택여부는 i + i-2 번쨰의합과 i-1번째의 값과 비교한다.
// 1.1 (i-2) + i > i-1 라면 현재턴다.
// 1.2 (i-2) + 1 < i-1 라면 이전번째를 턴다.
function solution(N, foodList) {
  let isAttack = Array.from({ length: foodList.length }, () => 0);

  for (let i = 2; i < foodList.length; i++) {
    if (foodList[i - 2] + foodList[i] > foodList[i - 1]) {
      isAttack[i - 2] = foodList[i - 2];
      isAttack[i] = foodList[i];
      foodList[i - 1] = 0;
      isAttack[i - 1] = 0;
    } else {
      isAttack[i - 1] = foodList[i - 1];
      foodList[i] = 0;
      foodList[i - 2] = 0;
      isAttack[i] = 0;
      isAttack[i - 2] = 0;
    }
  }
  console.log(isAttack);
  return isAttack.reduce((acc, cur) => acc + cur);
}

// 2차풀이 이코테 책 참고 (바텀업)
// memo[i] 는 i번째 까지 털 수 있는 최대값을 의미한다.

function solution(N, foodList) {
  let memo = [];
  memo[0] = foodList[0];
  memo[1] = Math.max(foodList[0], foodList[1]);

  // 이전값까지의 합이크면, 지금껀 선택하지 않는다.
  // (i-1)번까지의 합과 현재값 합친게 더 크면, 현재값을 선택한다.
  for (let i = 2; i < N; i++) {
    memo[i] = Math.max(memo[i - 1], memo[i - 2] + foodList[i]);
  }
  console.log(memo);
  return memo[N - 1];
}

console.log(solution(4, [1, 3, 1, 5]));
// console.log(solution(5, [1, 3, 1, 5, 6]));
// console.log(solution(5, [1, 3, 10, 5, 6]));
