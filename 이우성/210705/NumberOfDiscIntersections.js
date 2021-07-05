function solution(A) {
  let startDisc = [];
  let endDisc = [];

  for (let i = 0; i < A.length; i++) {
    startDisc.push(i - A[i]);
    endDisc.push(i + A[i]);
  }

  startDisc.sort((a, b) => a - b);
  endDisc.sort((a, b) => a - b);

  let intersect = 0;
  let j = 0;

  for (let i = 0; i < A.length; i++) {
    while (j < A.length && endDisc[i] >= startDisc[j]) {
      intersect = intersect + j;
      intersect = intersect - i;
      j++;
    }
  }
  // console.log("start", startDisc);
  // console.log('end', endDisc);

  return intersect > 10000000 ? -1 : intersect;
}

/**
 * 문제 파악
 * 1. (J, 0)은 x축(J)에 반지름이 A[J]인 원이 있다.
 * 2. 적어도 하나의 공통된 포인트가 있으면 교차라고 한다.
 * 3. 교차 지점이 10000000을 넘어가면 -1을 반환한다.
 *
 * 그래프
 * ----------
 *    --
 *     --------
 *     ----
 *       --
 *           -
 */
