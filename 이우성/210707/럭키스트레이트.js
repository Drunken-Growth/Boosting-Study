function solution(N) {
  let s = String(N).split("");
  let left = s.slice(0, s.length / 2).reduce((a, b) => Number(a) + Number(b));
  let right = s.slice(s.length / 2).reduce((a, b) => Number(a) + Number(b));

  return left === right ? "LUCKY" : "READY";
}

console.log(solution(123402)); // LUCKY
console.log(solution(7755)); // READY

/**
 * 수도 코드
 * 1. 정수 N을 반으로 나누어서 왼쪽 + 오른쪽이 같다면 럭키, 아니면 레디를 반환한다.
 * 2. 반으로 나누기 위해 문자열로 바꾼 후 반으로 나눈다.
 * 3. 각각 넘버로 바꾼 후 더해준다. 그리고 두 수가 같으면 럭키를 반환한다.
 */
