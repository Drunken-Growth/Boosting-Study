// Medium -> ReFail -> 꼭 다시풀어보기
// max와 maxCount 두 개의 변수개념 사용하는 아이디어 떠올리기 어려웠고, 코드 작성과정에서도 참고하지 않으니 많이 헤매었다.

// 문제이해
// 명령어 A[i]가 N보다 같거나 작으면 A[N]의 값을 1증가하고, A[i] > N 크면, 현재까지의 최대값으로 모두를 초기화한다.

// 문제접근
// 문제포인트는 최대값으로 초기화될 경우, 초기화 이전 계산은 팔요없어진다는 것이다.
// 따라서 마지막 초기화 이후의 과정만 필요하다.

// max명령어 이후의 값들을 기록하고, max명령어일때의 최대값을 기록한다.
function solution(N, A) {
  let max = 0;
  let maxCount = 0;
  let result = Array(N).fill(0);

  for (let i = 0; i < A.length; i++) {
    if (A[i] <= N) {
      if (result[A[i] - 1] < maxCount) {
        result[A[i] - 1] = maxCount;
      }
      result[A[i] - 1] += 1;
      max = Math.max(max, result[A[i] - 1]);
    } else {
      maxCount = max;
    }
  }

  result.forEach((el, idx) => {
    if (el < maxCount) {
      result[idx] = maxCount;
    }
  });
  return result;
}
