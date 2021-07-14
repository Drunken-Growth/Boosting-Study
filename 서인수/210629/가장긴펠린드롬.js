function solution(s) {
  // 접근 펠린드롬이 길이가 짝수일때와 홀수일때 2가지 경우를 나누어서 생각
  // 풀이방법
  // 1. 문자열 순회하며, 짝수/홀수에서 각각 가능한 펠린드롬 길이를 모두 answer에 담는다.

  // 2. checkOdd
  // 2.1 펠린드롬이 홀 수 일때는, 기준 idx를 기준으로 좌우로 +-1의 문자열을 비교한다.
  // 문자열의 한쪽 끝에 도착할 때까지 while 문 실행
  // 만약 좌우문자열 같다면 1) cnt+2   2) left - 1, right + 1
  // 좌우문자열 같지 않다면 바로 종료하고 cnt를 push한다.
  // while문 종료 후 그때의 cnt를 return 한다.

  // 3. checkEven
  // 3.1 짝수일 때는 left를 자기자신으로 하고 나머지는 checkOdd와 동일

  let answer = [];
  // 왼쪽문자열부터 비교시작
  for (let i = 0; i < s.length; i++) {
    answer.push(checkOdd(i));
    answer.push(checkEven(i));
  }

  // 체크하기
  function checkOdd(idx) {
    let cnt = 1;
    let left = idx - 1;
    let right = idx + 1;
    while (left >= 0 || right < s.length) {
      if (s[left] === s[right]) {
        cnt += 2;
        left -= 1;
        right += 1;
      } else {
        return cnt;
      }
    }
    return cnt;
  }
  function checkEven(idx) {
    let cnt = 0;
    let left = idx;
    let right = idx + 1;
    while (left >= 0 || right < s.length) {
      if (s[left] === s[right]) {
        cnt += 2;
        left -= 1;
        right += 1;
      } else {
        return cnt;
      }
    }
    return cnt;
  }

  return Math.max(...answer);
}
