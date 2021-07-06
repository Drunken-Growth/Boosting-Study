// 문제

// 게임의 아웃복서 캐릭터는 필살기인 '럭키 스트레이트' 기술이 있습니다.
// 이 기술은 매우 강력한 대신에 게임 내에서 점수가 특정 조건을 만족할 때만 사용할 수 있습니다.

// 특정 조건이란 현재 캐릭터의 점수를 N이라고 할 때 자릿수를 기준으로 점수 N을 반으로 나누어 왼쪽의 부분의 각 자릿수의 합과
// 오른쪽 부분의 각 자릿수의 합을 더한 값이 동일한 상황을 의미합니다.

// 예를 들어 현재 점수가 123,402라면 왼쪽 부분의 각 자릿수의 합은 1+2+3, 오른쪽 부분의 각 자릿수의 합은 4+0+2이므로
// 두 합이 6으로 동일하여 럭키 스트레이트를 사용할 수 있습니다.

// 현재 점수 N이 주어지면 럭키 스트레이트를 사용할 수 있는 상태인지 아닌지를 알려주는 프로그램을 작성해라

// 입력
// 점수 N (10 <= N <= 99,999,999) 단, 점수 N의 자릿수는 항상 짝수형태

// 출력
// 스트레이트를 사용할 수 있다면 "LUCKY", 사용할 수 없다면 "READY"를 출력

// O(N^2)
function solution(N) {
  const arr = `${N}`.split("");
  const len = arr.length;
  const front_sum = arr
    .slice(0, len / 2)
    .reduce((acc, cur) => acc + Number(cur), 0);
  const end_sum = arr
    .slice(len / 2, len)
    .reduce((acc, cur) => acc + Number(cur), 0);

  return front_sum === end_sum ? "LUCKY" : "READY";
}

// O(N)
function solution(N) {
  const arr = `${N}`.split("");
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (i < arr.length / 2) {
      sum += Number(arr[i]);
    } else {
      sum -= Number(arr[i]);
    }
  }
  return sum === 0 ? "LUCKY" : "READY";
}

console.log(solution(123402)); // "LUCKY"
console.log(solution(7755)); // "READY"
