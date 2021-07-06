// TODO : 다시 한 번 풀어보기
// 1차풀이 실패
// O(N) 으로는 도저히 생각이 나지 않아 레퍼 참조하여, 카데인알고리즘 사용하여 풀어봄
// 카데인알고리즘은 최대부분합을 구할 때, 지역최대합과 다음요소만을 고려하여 최대부분합을 구하는 방법이다.

// 문제이해
//가장 큰 A[P]부터 A[Q]까지 합을 리턴하는 문제
// localMax는 현재요소까지의 합과 현재요소 중 큰값이다.

function solution(A) {
  let localMax = A[0];
  let globalMax = A[0];

  for (let i = 1; i < A.length; i++) {
    // console.log([A[i], localMax, globalMax]);
    localMax = Math.max(A[i], localMax + A[i]);
    if (localMax > globalMax) {
      globalMax = localMax;
    }
  }

  return globalMax;
}
//  1차풀이
// 1. A를 순회하며 값을 더하다가,
// -를만나면 memo에 sum값, minus값을 저장하고 0으로 초기화후 진행

// function solution(A) {

//     let [sum, minus, memo] = [0,0,0]

//     for(let i = 0; i < A.length; i++){
//       if(A[i] < 0){
//           minus += A[i]
//           memo = sum
//           sum = 0
//       }else {
//           sum+= A[i]
//           if(minus > sum)
//       }
//     }
//     return Math.max(sum, memo)
// }
