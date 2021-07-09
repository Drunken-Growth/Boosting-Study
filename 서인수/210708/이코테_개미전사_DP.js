// 문제이해
// 주어진 배열에서 최소 좌우 1칸 이상 띄어진 값들만을 선택할 때, 최대합을 구하는 문제

// why DP
// 1. 큰 문제 작은문제로?  => 흠...
// 2. 작은 문제가 큰 문제의 변화없이 재사용 하는가? => 흠...

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

console.log(solution(4, [1, 3, 1, 5]));
console.log(solution(5, [1, 3, 1, 5, 6]));
console.log(solution(5, [1, 3, 10, 5, 6]));
