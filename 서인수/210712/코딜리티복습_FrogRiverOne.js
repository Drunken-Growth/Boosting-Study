// veryEasy -> set객체를 활용하는 아주 기본적이고 좋은 문제
// 1번 다시 읽어보는 것 정도 추천

// 문제이해
// 강의 길이가 X일 때, 1부터 X까지 나뭇잎이 모두 들어왔을 때의 시간을 리턴하라.
// X = 5 이면 , A가 1, 2, 3, 4 ,5 를 모두 가지는 최소의 idx를 리턴하는 것

// 문제접근
// 중복이 불가한 set에 A의 요소를 담는다.
// X보다 같거나 작은 값만을 set에 담고, set의 길이가 X가 되는 경우 A의 idx를 리턴

// 문제풀이
// 1. set선언
// 2. for문으로 A순회
// 2.1 A[i]가 X보다 작거나 같으면, set에 push
// 2.2 set의 size가 X가 되면 A[i]리턴

function solution(X, A) {
  let set = new Set();

  for (let i = 0; i < A.length; i++) {
    if (A[i] <= X) {
      set.add(A[i]);
    }
    if (set.size === X) return i;
  }

  return -1;
}
