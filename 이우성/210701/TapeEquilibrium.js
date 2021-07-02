function solution(A) {
  let a = 0;
  let b = A.reduce((acc, cur) => acc + cur);
  let tape = [];

  for (let i = 0; i < A.length - 1; i++) {
    a += A[i];
    b -= A[i];

    tape.push(Math.abs(a - b));
  }

  return Math.min(...tape);
}

/**
* 문제: 주어진 식에서 P를 1부터 넣어본다.

* 1. P = 1, P = 2,... 차레대로 넣고 주어진 식대로 계산한다. (Math.abs 사용)
* 2. 하나는 계속 더하고, 하나는 계속 뺀다.
* 2. 값들을 모아놓고 제일 작은 숫자를 반환한다. 
* 
*/
