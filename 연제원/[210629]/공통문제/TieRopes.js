// 로프들이 배열로 주어지는 데 근접한 요소만 연결할 수 있다.
// 이때, K가 주어지는데 K보다 크거나 같도록 로프를 묶어 최대 수를 반환해라.

// 예를 들어 K = 4, arr = [1,2,3,4,1,1,3] 일 때
// arr[1] + arr[2] = 5
// arr[4] + arr[5] + arr[6] = 5
// => K(=4) 보다 크거나 같은 로프 는 총 3개 (1, 5, 4, 5) 중

// 그리디.. 매 순간 최선의 방법을 찾아라..?

// 1. 그냥 순차적으로 진행하면 될 것 같아서..
function solution(K, A) {
  // write your code in JavaScript (Node.js 8.9.4)
  let answer = 0;
  let sum = 0;

  for (let i = 0; i < A.length; i++) {
    if (sum + A[i] >= K) {
      answer++;
      sum = 0;
    } else {
      sum += A[i];
    }
  }
  return answer;
}

console.log(solution(4, [1, 2, 3, 4, 1, 1, 3])); // 3
