// 2차풀이
// i의 시작값과 끝값만 바꿔주었는데 왜 통과가 될까?
// 루트값으로 부터 시작해서 더해가며 가장 가까운 큰값을 구하는 것과, 루트값으로 부터 빼가며 가장 가까운 작은값을 구하는 것은 같은과정인 것 같은데..
function solution(N) {
  let left = 1;
  let right = N;
  for (let i = Math.floor(Math.sqrt(N)); i > 0; i--) {
    if (N % i === 0) {
      left = i;
      right = N / i;
      break;
    }
  }
  return (left + right) * 2;
}

// 1차풀이
// 정확성 100%
// 효율성 90% N이 큰 소수일 때 타임에러오류 발생

// 넓이가 N인
// 사격형의  최소둘레의 길이 구하기

// 가장 루트값의 가까운 약수들의 곱일 때가 최소둘레를 보장한다.
//
function solution(N) {
  let left = 1;
  let right = N;
  for (let i = Math.floor(Math.sqrt(N)); i <= N; i++) {
    if (N % i === 0) {
      left = i;
      right = N / i;
      break;
    }
  }
  return (left + right) * 2;
}
