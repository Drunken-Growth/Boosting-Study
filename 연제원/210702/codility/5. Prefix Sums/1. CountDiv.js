// Write a function:

// function solution(A, B, K);

// that, given three integers A, B and K,
// returns the number of integers within the range [A..B] that are divisible by K, i.e.:

// 정수 A, B, K가 주어질 때, A ~ B (A <= B) 숫자 중에 K로 나누어 떨어지는 수들의 갯수를 리턴해라

// 효율적인 알고리즘을 작성해보란다!

// 시간 초과
function solutionFail(A, B, K) {
  let answer = 0;

  while (A <= B) {
    if (A % K === 0) {
      answer++;
      A += K;
    } else {
      A++;
    }
  }

  return answer;
}

function solution(A, B, K) {
  // A가 K의 배수인 경우 1로 시작, 아닌 경우 0으로 시작
  let answer = A % K === 0 ? 1 : 0;
  // 단순히 몫의 갯수들을 빼주면 되는거였다..!
  answer += parseInt(B / K) - parseInt(A / K);
  return answer;
}

console.log(solution(6, 11, 2)); // 3
console.log(solution(3, 7, 4)); // 1
console.log(solution(9, 9, 3)); // 1
console.log(solution(0, 0, 11)); // 1
console.log(solution(1, 1, 11)); // 0
console.log(solution(11, 345, 17)); // 20
