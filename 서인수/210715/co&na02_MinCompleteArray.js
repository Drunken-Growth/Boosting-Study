/*
문제
Q. 배열 A는 N개의 길이를 가질 때, 1~N 사이의 숫자들로만 구성된다.
A가 1~N까지 차례대로 모든 수를 가질 수 있도록 +-1의 연산을 할 수 있다고 할 때의 최소의 연산수를 구하여라
Ex1. [1, 2, 1] 은 N =3 이므로 [1,2,3]의 수를 가져야 한다.
 띠라서 세번째 요소를 1 -> 2 -> 3 으로 총 2번의 연산을 할 수 있다.

Ex2. [2,1,4,4] 는 N = 4 이므로 [1,2,3,4]를 가져야하고, 
배열의 순서는 고려하지 않기 때문에 세번째 요소를 4-> 3 으로 바꾸는 1번의 연산만이 필요하다.

Ex3. [6,2,3,5,6,3]은 3-> 2-> 1로 2번 + 6-> 5-> 4로 2번 총 4번의 연산을 필요로 한다

*/

function solution(A) {
  let cnt = 0;
  A.sort((a, b) => a - b);

  for (let i = 1; i <= A.length; i++) {
    if (i === A[i - 1]) continue;
    cnt += Math.abs(A[i - 1] - i);
    if (cnt > 1000000) return -1;
  }

  return cnt;
}

console.log(solution([1, 2, 1])); //2
console.log(solution([2, 1, 1])); // 2
console.log(solution([2, 1, 4, 4])); // 1
console.log(solution([6, 2, 3, 5, 6, 3])); // 4
