// Count factors of given number n.

// 자연수 D는 자연수 N의 한 요소다. N = D * M(정수) 이 가능할 때 => 약수라는 뜻인듯
// 자연수 N이 주어졌을 때, 약수의 수를 구해라

// N = 24 => return 8, [1,2,3,4,6,8,12,24]

// 풀이
// 약수의 개수 공식 => 소인수 분해후, 소인수의 지수에 +1해서 곱
// 재귀 이용?

// 소수 판단 먼저
// 일단 1과 자기 자신은 무조건 약수이므로 2로 시작

// O(sqrt(N))
// 내가 푼 통과 방법
function solution(N) {
  if (N === 1) return 1;
  if (isPrime(N)) return 2;

  let soinsu = {};
  while (true) {
    console.log(N, soinsu);
    if (isPrime(N)) {
      if (soinsu[N]) {
        soinsu[N]++;
      } else {
        soinsu[N] = 1;
      }
      break;
    }

    for (let i = 2; i <= Math.sqrt(N); i++) {
      if (N % i === 0) {
        if (soinsu[i]) {
          soinsu[i]++;
        } else {
          soinsu[i] = 1;
        }
        N = N / i;
        break;
      }
    }
  }

  const count = Object.values(soinsu).reduce((acc, cur) => (acc *= cur + 1), 1);
  return count;
}

// num >= 2라고 가정
function isPrime(num) {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }

  return true;
}

// * 수학적 공식 이용 => 제곱근을 기준으로 앞뒤로 짝을 이룬다!
function solution(N) {
  if (N === 1) return 1;

  let count = 1; // 1과 자기자신은 무조건 약수 => 나중에 2 곱해줄 것

  for (let factor = 2; factor < Math.sqrt(N); factor++) {
    // 범위 조심 (제곱근 제외)
    if (N % factor === 0) {
      count++;
    }
  }

  count *= 2;

  if (Math.sqrt(N) % 1 === 0) {
    // 제곱근이 존재할 경우(정수로) + 1
    count++;
  }

  return count;
}

console.log(solution(24)); // 8
console.log(solution(64)); // 7
