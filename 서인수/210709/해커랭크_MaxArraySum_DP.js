// 문제이해
// 인접하지 않은 값들의 부분집합을 선택할 수 있을 때, 최대합은?

// DP 접근
// 점화식 가능? i번째를 i-1, i-2 를 이용하여 구하는 것 가능?
// 큰문제 작은문제, 작은문제들을 반복하여 큰문제 해결

// 바텀업(for문으로 전부구하기)
// 탑다운(재귀로 구현)

// 풀이
// i번째를 선택 여부는 i-1번째까지의 합과 (i-2번째까지의 합 + 현재i의값) 중 큰값에 따라 결정
// Sum(i-1) > Sum(i-2) + arr[i] 이면 (i-2, i) 선택
// else : (i-1)선택
// +추가 (i-2번째 까지 합이 음수라면 arr[i] 만 선택하는 경우가 가장 크다.)
// memo[i-1] : i-1까지의 합
// memo[i-2] + arr[i] : 두번째 앞 요소까지 합 + 현재요소합
// arr[i] : 현재 요소값
// 중 큰 값이 해당요소에서 가장 큰 합이된다.
function solution(arr) {
  let memo = [];
  memo[0] = arr[0];
  memo[1] = Math.max(arr[0], arr[1]);

  for (let i = 2; i < arr.length; i++) {
    memo[i] = Math.max(memo[i - 1], memo[i - 2] + arr[i], arr[i]);
    console.log(memo[i]);
  }

  return memo[arr.length - 1];
}

// console.log(solution([2, 1, 5, 8, 4])); // [2,5,4] // 11
// console.log(solution([3, 7, 4, 5, 6])); // 13
console.log(solution([3, 5, -7, 8, 10])); //15
