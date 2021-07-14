/*문제이해
 두개의 배열(A,B)이 주어지고 K번 원소교환을 할 수 있다.
 원소교환 이후 A의 요소합의 최대값을 구하는 문제

 N < 100,000
 접근
 A난 오름차순, B는 내림차순 정렬하여 k번째까지 요소를 서로 교환한다.
*/

function solution(N, K, A, B) {
  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);

  // swap
  for (let i = 0; i < K; i++) {
    let temp = A[i];
    A[i] = B[i];
    B[i] = temp;
  }
  // A의 합구하기
  return A.reduce((acc, cur) => acc + cur);
}

console.log(solution(5, 3, [1, 2, 5, 4, 3], [5, 5, 6, 6, 5])); //26
console.log(solution(5, 4, [1, 2, 5, 4, 3], [5, 5, 6, 6, 5])); //27
