/* Codility - TieRopes 
  1. A배열을 순회하며 누적합을 구한다
  2. 누적합이 K보다 커지는 경우를 찾으면, 1) count 증가 2) 누적합 초기화
  3. 순회를 마치고, 최종 count를 반환    
*/

function solution(K, A) {
  let count = 0;
  let sum = 0;

  for (let i = 0; i < A.length; i++) {
    sum += A[i];
    if (sum >= K) {
      count++;
      sum = 0;
    }
  }
  return count;
}
