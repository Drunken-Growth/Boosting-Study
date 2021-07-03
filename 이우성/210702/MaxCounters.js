function solution(N, A) {
  let counters = Array.from({ length: N }).map((v) => 0);
  let maxCounter = 0;
  let lastMaxCounter = 0;

  for (let i = 0; i < A.length; i++) {
    if (A[i] > N) {
      lastMaxCounter = maxCounter;
    } else {
      if (counters[A[i] - 1] < lastMaxCounter) {
        counters[A[i] - 1] = lastMaxCounter + 1;
      } else {
        counters[A[i] - 1] += 1;
      }

      if (maxCounter < counters[A[i] - 1]) {
        maxCounter = counters[A[i] - 1];
      }
    }
  }

  for (let i = 0; i < counters.length; i++) {
    if (counters[i] < lastMaxCounter) {
      counters[i] = lastMaxCounter;
    }
  }

  return counters;
}

/**
 * (3, 2, 2, 4, 2)
 * 문제 파악
 * 1. N 카운터는 0부터 시작, 카운터 X는 1씩 증가.
 * 2. 모든 카운터는 어떠한 카운터의 맥시멈 값
 * 3. 만약 A[K] = N + 1이면 현재 중에서 가장 큰 수를 0값에다가 넣어준다.
 * 4. 다 더해준 최종 카운터들의 배열을 리턴한다.
 * 5. 시간 복잡도 O(n^2) 타임 에러 발생 => O(n)으로 줄여야 한다.
 * 6. 시간 효율을 위해 maxCounter 부분을 수정한다.
 *  6.1 N보다 큰 요소가 나왔을 때의 맥스 카운터를 저장한다.
 *  6.2 현재 가장 큰 요소는 계속 갱신한다.
 *  6.3 만약 마지막 맥스 카운터보다 낮은 요소가 있다면 거기에 더해준다.
 *  6.4 Math.max는 O(n)이기 때문에 임시 변수를 활용해서 해결한다.
 */
