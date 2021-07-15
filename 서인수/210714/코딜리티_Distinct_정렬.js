// veryEasy -> 다시안풀어도됨

// 문제
// A배열에서 존재하는 값들의 수를 세는 것
// 1,1 ,2 , 2 -> 1,2

function solution(A) {
  const set = new Set(A);
  return set.size;
}
