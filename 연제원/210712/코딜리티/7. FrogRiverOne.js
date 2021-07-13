// 새로 풀이
function solution(X, A) {
  let leaves = {};

  for (let i = 0; i < A.length; i++) {
    const position = A[i];
    if (!leaves[position]) {
      leaves[position] = true;
      X--;
    }
    if (X === 0) {
      return i;
    }
  }
  return -1;
}

// 기존 풀이

// set 객체는 시간복잡도가 겁내 빠르다.
function solution(X, A) {
  const check = new Set();
  for (let i = 0; i < A.length; i++) {
    // 어차피 중복은 알아서 제거된다.
    check.add(A[i]);
    // 배열의 요소는 무조건 1 ~ X이므로
    // 사이즈 === X => 나뭇잎이 꽉찼다!
    if (check.size === X) return i;
  }
  return -1;
}

function solutionFail(X, A) {
  // => O(N)일텐디... 시간 초과 ㅠ
  let answer = -1;
  let leaves = Array(X).fill(false); // [false, false, false, fasle, false]
  let count = X; // 다 깔렸는 지 확인할 변수 => count가 0인 경우 다 깔렸다는 뜻
  let time = 0; // 새로 깔릴 때만 추가할 시간 변수 => count가 0일 경우 그 때 시간을 리턴

  while (count > 0 && A.length > 0) {
    const fall = A.shift();
    // 나뭇잎이 깔려있지 않을 때만 나뭇잎을 새로 깔고, count를 -1 해준다
    if (!leaves[fall - 1]) {
      leaves[fall - 1] = true;
      count--;
    }
    if (count === 0) return time;
    time++;
  }
  return answer;
}
