/** 코딜리티 - MissingInteger
 *  1. A 오름차순 정렬
 *  2. A 순회하며
 *    2-1. 건너뛰는 숫자 발견하면 바로 리턴
 *          최근값(cur) + 1 보다 크다 = 연속이 아니다
 *    2-2. 연속된 숫자면 최근값(cur) 갱신
 */

function solution(A) {
  A.sort((a, b) => a - b);
  let cur = 0;
  for (let i = 0; i < A.length; i++) {
    if (cur + 1 < A[i]) return cur + 1;
    else if (A[i] > 0) cur = A[i];
  }
  return cur + 1;
}
