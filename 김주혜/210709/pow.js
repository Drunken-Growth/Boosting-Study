/* 문제 : A, B가 인자로 주어질 때, A의 B제곱 , 뒷자리 5개, 숫자로 리턴 */

function solution(A, B) {
  let num = 1;
  for (let i = 0; i < B; i++) {
    let s = num * A + "";
    num = Number(s.substring(s.length - 5));
  }
  return num;
}

console.log(solution(2, 900));
console.log(solution(2, 15));
console.log(solution(123456789, 12345)); // 38549
