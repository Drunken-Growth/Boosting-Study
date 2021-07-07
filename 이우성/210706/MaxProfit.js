// 효율: 100%, 복잡도: O(n)
function solution(A) {
  let N = A.length;
  if (N === 0) return 0;

  let buyStock = Array.from({ length: N }).map((v) => 0);
  let sellStock = Array.from({ length: N }).map((v) => 0);

  buyStock[0] = A[0];
  sellStock[sellStock.length - 1] = A[N - 1];

  for (let i = 1; i < N - 1; i++) {
    if (A[i] < buyStock[i - 1]) {
      buyStock[i] = A[i];
    } else {
      buyStock[i] = buyStock[i - 1];
    }
  }

  for (let i = N - 2; i > 0; i--) {
    if (sellStock[i + 1] < A[i]) {
      sellStock[i] = A[i];
    } else {
      sellStock[i] = sellStock[i + 1];
    }
  }
  // console.log(buyStock, sellStock);

  let maxProfilt = 0;

  for (let i = 0; i < N - 1; i++) {
    if (maxProfilt < sellStock[i + 1] - buyStock[i]) {
      maxProfilt = sellStock[i + 1] - buyStock[i];
    }
  }

  return maxProfilt;
}

/**
 * 문제 파악
 * 1. 날마다 주식 가격이 적혀있는 배열 A가 주어진다.
 * 2. 거래는  A[Q] ≥ A[P] 조건에서,  A[Q] - A[P]
 * 3. 그렇지 않으면, A[P] - A[Q]
 * 4. 언제 사고 언제 팔았을 때 가장 큰지 구한다.
 *
 * 수도 코드
 * 1. O(n^2) 미만, 빈 배열이거나 길이가 1이면 0을 반환.
 * 2. 요소가 1개이상부터 시작
 * 3. A[0]에서 A[N]으로 갈때는 사야 하므로 싼 가격을 찾아야 하고
 * 4. A[N]에서 A[0]으로 내려갈때는 팔아야하므로 큰 가격을 찾는다.
 * 5. 처음에 A[0]가격을 산 다음에, 더 작은 값이 나오면 바로 바꿔준다.
 * 6. 반복문은 1부터 시작해서 큰 값이 나오면 바꿔준다.
 * 7. 샀을 때 - 팔았을 때 가격을 제일 큰 값으로 계속 갱신해준다.
 */
