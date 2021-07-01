// https://app.codility.com/demo/results/trainingTKMA5H-EWM/
// CyclicRotation

// An array A consisting of N integers(정수) is given.
// Rotation of the array means that each element is shifted right by one index,
// and the last element of the array is moved to the first place.
// => 오른쪽으로 요소들이 이동, 맨 마지막 요소는 앞으로 이동 => 순환 큐?
// For example, the rotation of array A = [3, 8, 9, 7, 6] is [6, 3, 8, 9, 7]
// (elements are shifted right by one index and 6 is moved to the first place).

// The goal is to rotate array A K times; that is,
// each element of A will be shifted to the right K times.

// Write a function:

// function solution(A, K);

// that, given an array A consisting of N integers and an integer K, returns the array A rotated K times.

// For example, given

//     A = [3, 8, 9, 7, 6]
//     K = 3
// the function should return [9, 7, 6, 3, 8]. Three rotations were made:

//     [3, 8, 9, 7, 6] -> [6, 3, 8, 9, 7]
//     [6, 3, 8, 9, 7] -> [7, 6, 3, 8, 9]
//     [7, 6, 3, 8, 9] -> [9, 7, 6, 3, 8]
// For another example, given

//     A = [0, 0, 0]
//     K = 1
// the function should return [0, 0, 0]

// Given

//     A = [1, 2, 3, 4]
//     K = 4
// the function should return [1, 2, 3, 4]

// Assume that:

// N and K are integers within the range [0..100];
// each element of array A is an integer within the range [−1,000..1,000].
// In your solution, focus on correctness. The performance of your solution will not be the focus of the assessment.

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

// K번만큼 이동한다. = K를 배열 A의 길이로 나눈 나머지만큼 이동
function solution(A, K) {
  // write your code in JavaScript (Node.js 8.9.4)

  // 1. 총 이동수 간소화
  const move = K % A.length;

  // 2. 전부 이동했을 때 맨 앞에 갈 요소 위치를 구함
  //    배열 A의 전체길이 - 이동수 => 여기에 위치한 요소가 맨 앞으로 이동하게 된다.
  //    잘라서 맨 앞으로 보낸 후, 배열의 나머지 요소들을 뒤에 붙여줌
  //    splice를 사용했으므로 (시작 인덱스 = A.length - move , 제거할 숫자 = move)
  return A.splice(A.length - move, move).concat(A);
}

console.log(solution([3, 8, 9, 7, 6], 3)); // [9, 7, 6, 3, 8]
console.log(solution([0, 0, 0], 1)); // [0, 0, 0]
console.log(solution([1, 2, 3, 4], 4)); // [1, 2, 3, 4]
