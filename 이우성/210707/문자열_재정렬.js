function solution(N) {
  let str = "";
  let sum = 0;
  let numbers = "123456789";

  for (let i = 0; i < N.length; i++) {
    if (numbers.includes(N[i])) {
      sum += Number(N[i]);
    } else {
      str += N[i];
    }
  }
  let s = str.split("").sort().join("");

  return s + sum;
}

console.log(solution("K1KA5CB7")); // ABCKK13
console.log(solution("AJKDLSI412K4JSJ9D")); // ADDIJJJKKLSS20

/**
 * 수도 코드
 * 1. 주어진 문자열이 문자인지 숫자인지 구분 짓는다.
 * 2. 문자열은 정렬하고 숫자는 다 더해서 둘이 합친다.
 */
