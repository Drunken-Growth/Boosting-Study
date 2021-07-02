// A small frog wants to get to the other side of a river.
// The frog is initially located on one bank of the river (position 0)
// and wants to get to the opposite bank (position X+1).
// Leaves fall from a tree onto the surface of the river.

// You are given an array A consisting of N integers representing the falling leaves.
// A[K] represents the position where one leaf falls at time K, measured in seconds.

// The goal is to find the earliest time when the frog can jump to the other side of the river.
// The frog can cross only when leaves appear at every position across the river from 1 to X
// (that is, we want to find the earliest moment when all the positions from 1 to X are covered by leaves).
// You may assume that the speed of the current in the river is negligibly small,
// i.e. the leaves do not change their positions once they fall in the river.

// 문제
// 개구리가 반대편 강둑으로 넘어가려한다.
// 강 사이에는 잎들이 시간별로 떨어지는데 , 그 시간에 해당하는 위치들이 A배열로 주어진다.
// 중요 : 모든 잎이 1단위로 꽉꽉 채워져있어야 건널 수 있다! 즉, 거리 X가 주어지면 1~X까지 모든 거리에 나뭇잎 있어야 가능 (강둑의 위치 = X + 1)
// 잎이 한번 떨어지면 계속 그 자리를 유지

// 목표는 강 건너로 최소한으로 도달할 수 있는 시간을 구하는 것이다.
// 반대편을 도달할 수 없으면 -1 을 리턴

// 예를 들어, 거리 X = 5, A = [1,3,1,4,2,3,5,4] 일 때
// 6초일때 나뭇잎이 1,2,3,4,5 다 깔리므로 통과 가능!

// 풀이
// 어떻게 하면 시간복잡도를 낮출까...
// 1. 기본 answer = -1로 할당
// 2. 나뭇잎이 깔리는 배열을 생성 = leaves
// 3. 어떤 조건을 만족하면 count -= 1, 이를 leaves를 통해 확인
// 4. count = 0이 되는 순간 리턴, while문을 다돌아도 안되면 -1 리턴

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

console.log(solution(5, [1, 3, 1, 4, 2, 3, 5, 4])); // 6
console.log(solution(2, [1, 1, 1, 1, 2, 1, 1, 1])); // 4
