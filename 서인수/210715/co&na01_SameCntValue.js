/*문제
Q. 주어진 베열에서 특정 값과 해당 값이 존재하는 횟수가 일치하는 값 중 가장 큰 값을 찾아 리턴하라.
Ex 1.  [5,5,5,5,5] 5라는 값이 5번 나왔기 때문에, 조건에 해당한다. -> 5 return
  2. [7,1,2,8,2] 1은 1번, 2는 2번 나와 1,2가 각각 조건을 만족한다. 그 중 가장 큰 값인 -> 2 return
  3. [3,8,2,3,3,2] 2는 2번, 3은 3번 나왔기 때문에 큰 값인 3 리턴
  
*/
function solution(A) {
  let cntObj = {};
  let max = 0;

  for (let i = 0; i < A.length; i++) {
    cntObj[A[i]] = (cntObj[A[i]] || 0) + 1;
  }

  for (const key in cntObj) {
    if (Number(key) === cntObj[key]) {
      max = Math.max(max, cntObj[key]);
    }
  }
  return max;
}

console.log(solution([5, 5, 5, 5, 5])); // 5
console.log(solution([7, 1, 2, 8, 2])); // 2
console.log(solution([3, 8, 2, 3, 3, 2])); // 3
