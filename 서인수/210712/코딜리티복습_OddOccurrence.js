// Easy
// 두가지 방법 모두 좋은 접근이라고 생각한다.
// 복습 시 풀었던 방법은 코드를 작성할 때 엣지케이스에 많이 걸렸으므로 시간이 있다면 한 번더 풀어보기

// 문제이해
// A배열 중에서 짝수개의 같은 값을 가지지 않고, 유일한 값을 가지는 하나의 요소를 찾아 리턴하는 문제

// 2차 복습 풀이
// 1. A를 오름차순 정렬한다.
// 2. A를 순회하며 A[i]와 A[i+1] 을 비교한다.
// 2.1 A[i] !== A[i+1] 이라면 A[i]값이 혼자있는 값이다.

// 3. 예외처리
// 3.1 A의 길이가 1이라면 A[0] 이 유니크값
// 3.2 A를 모두 순회해도 발견하지 못했다면 A의 마지막값이 유니크값이다.

function solution(A) {
  if (A.length === 1) return A[0];
  A.sort((a, b) => a - b);

  for (let i = 0; i < A.length - 1; i = i + 2) {
    if (A[i] !== A[i + 1]) {
      return A[i];
    }
  }

  return A[A.length - 1];
}

// 1차 풀이
// 풀이방법
// 1. 해당 값이 없으면 객체에 넣어주고, 있으면 제거해준다.
// 2. 정답을 제외하고는 짝수번 등장하므로 결국에 정답 값만이 obj에 남게된다.
// 3. 해당 값을 꺼내서 반환

function solution(A) {
  let obj = {};

  for (const el of A) {
    if (obj[el]) {
      delete obj[el];
    } else {
      obj[el] = el;
    }
  }

  return Object.values(obj)[0];
}
