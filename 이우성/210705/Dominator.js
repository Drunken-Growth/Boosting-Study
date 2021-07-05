function solution(A) {
  let max = 0;
  let leader = -1;

  let obj = {};

  for (let i = 0; i < A.length; i++) {
    if (obj[A[i]] === undefined) {
      obj[A[i]] = 0;
    }
    obj[A[i]] += 1;
  }

  for (let key in obj) {
    if (max < obj[key] && parseInt(A.length / 2) < obj[key]) {
      max = obj[key];
      leader = key;
    }
  }

  return A.indexOf(Number(leader));
}

/**
 * 문제 파악
 * 0. 시간 복잡도: O(n^2) 미만
 * 1. 도미네이터 A 배열은 값이 절반 이상의 요소가 나온다?
 * 2. A = [3, 4, 3, 2, 3, -1, 3, 3], return 0, 2, 4, 6, 7
 * 3. 요소의 인덱스를 반환한다. 도미네이터를 가지고 있지 않으면 -1을 반환한다.
 * 4. 요소가 길이의 절반 이상을 차지해야한다.
 */
