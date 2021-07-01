function solution(N) {
  N = N.toString(2)
    .split("1")
    .map((v) => v.length);
  N[N.length - 1] !== 0 ? (N[N.length - 1] = 0) : null;

  return N.length > 2 ? Math.max(...N) : 0;
}

/**
* 1. N을 이진법으로 바꾼다.
* 2. 1을 기준으로 자르고 문자열의 길이 형태로 바꾼다.
* 3. 만약 맨 끝이 0이 아니라면 binary gap일 때, 1이 아니였다는 뜻이므로 
 맨 마지막은 0으로 처리한다.
* 4. N의 길이가 2 이상이면 1로 감싸졌다는 뜻이므로 길이 배열에서 최댓값을 반환한다.
*/
