function solution(N) {
  let primes = [];

  // 약수 구하기
  for (let i = 1; i <= Math.sqrt(N); i++) {
    if (N % i === 0) {
      primes.push([i, N / i]);
    }
  }

  let minPerimeter = 2000000003;

  for (let i = 0; i < primes.length; i++) {
    let perimeter = (primes[i][0] + primes[i][1]) * 2;

    if (perimeter < minPerimeter) {
      minPerimeter = perimeter;
    }
  }

  return minPerimeter;
}

/**
 * 문제 파악
 * 1. 1 ~ N에서 두 개의 정수를 뽑아 2 * (A + B)를 했을 때 가장 적은 수를 반환
 * 2. A * B = N 을 만족해야 한다.
 *
 * 수도 코드
 * 1. O(n)미만 => for문을 끝까지 돌지 않는다.
 * 2. N의 약수를 구한다.
 * 3. 약수에 둘레 공식을 넣어보고 최소값을 계속 갱신한다.
 * 4. 최소값 반환
 */
