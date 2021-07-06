// 시간 복잡도 O(n^2) / 정답률 40%

function solution(A) {
  let answer = 0;
  let sum = 0;
  let minAvg = 99999999999;

  for (let P = 0; P < A.length - 1; P++) {
    sum = A[P];
    for (let Q = P + 1; Q < A.length; Q++) {
      // let sum = A.slice(P, Q).reduce((acc, cur) => acc + cur, 0);
      sum = sum + A[Q];
      let avg = (sum + A[Q]) / (Q - P + 1);

      if (avg < minAvg) {
        minAvg = avg;
        answer = P;
        // console.log("avg", avg)
        // console.log("minAvg", minAvg);
      }
    }
  }

  return answer;
}

/**
 * 문제 파악
 * 0. 시간 복잡도: O(n + m) 이하
 * 1. 슬라이스(P, Q) A 배열은 적어도 2개의 요소를 포함하고 있다.
 * 2. 처음부터 시작해서 가장 작은 평균을 구해라
 * 3. 공식 => A.slice(P, Q) + A[Q] / (Q - P + 1)
 * 4. for문을 통해 공식으로 값을 다 구하고 거기서 제일 작은 값을 찾는다.
 * 5. 그 값의 slice의 start 인자를 반환한다.
 * 6. 이중 포문을 돌려서 i, j의 모든 조합으로 슬라이싱을 한 후, 최솟값 찾기?
 */

// 시간 복잡도 O(n) / 정답률 100%

function solution(A) {
  let answer = 0;
  let avg = 0;
  let minAvg = 999999999;

  for (let P = 0; P < A.length - 1; P++) {
    let Q = P + 1;

    if (P < A.length - 1) {
      avg = (A[P] + A[Q]) / 2;

      if (avg < minAvg) {
        minAvg = avg;
        answer = P;
      } else if (avg === minAvg) {
        if (P < answer) {
          answer = P;
        }
      }
    }

    if (P < A.length - 2) {
      avg = (A[P] + A[Q] + A[Q + 1]) / 3;

      if (avg < minAvg) {
        minAvg = avg;
        answer = P;
      } else if (avg === minAvg) {
        if (P < answer) {
          answer = P;
        }
      }
    }
  }

  return answer;
}

/**
 * 구글링 후 문제 파악
 * 1. 두 수 a, b가 있고 a <= b 일 경우, 둘의 평균은 항상 a보다 크거나 같다.
 * 2. 마찬가지로 a, b, c, d가 있으면 (a + b) <= (c + d)일 경우
 * 3. 4개의 평균은 항상 (a + b) 보다 크거나 같다. 그러면 최소값은 무조건 (a + b)가 된다.
 *  3.1 그러면 4개의 경우는 구할 필요가 없다.
 *  3.2 3개일 경우 예외사항이다. a, b, c의 경우를 다 확인해야 된다.
 * 4. 그렇기 때문에, 2개인 경우와 3개인 경우로 나누어서 생각하면 된다.
 * 5. 만약 최솟값이 같으면 더 작은 인덱스를 반환한다.
 */
