// Find an index of an array such that its value occurs at more than half of indices in the array.

// An array A consisting of N integers is given.
// The dominator of array A is the value that occurs in more than half of the elements of A.

// ex) A = [3, 4, 3, 2, 3, -1, 3, 3]
// The dominator of A is 3 because
// it occurs in 5 out of 8 elements of A (namely in those with indices 0, 2, 4, 6 and 7)
// and 5 is more than a half of 8.

// Write a function

// function solution(A);

// that, given an array A consisting of N integers,
// returns index of any element of array A in which the dominator of A occurs.
// The function should return −1 if array A does not have a dominator.

// 문제
// 정수의 조합으로 이루어진 배열 A가 주어질 때 배열의 길이의 반보다 큰 갯수를 가진 요소를 찾아라.
// A = [3, 4, 3, 2, 3, -1, 3, 3]일때 지배자..?는 3이다. 8개의 요소중 5개가 3의 값을 가지고, 배열 길이의 반인 4보다 많이 때문에
// 지배자가 없으면 -1 리턴해라~!

// 풀이
// 해시(set 객체)를 이용

// 1. 배열을 순환하면서 요소의 값을 키, 인덱스를 배열형태로 저장한다.
//  1-1. 이미 존재하던 키 => hash[A[i]].push(i);
//  1-2. 존재하지 않는 키 => [i]
// 2. hash 객체를 돌면서 value가 배열이므로 이 배열의 길이가 A.length / 2 보다 큰 경우만 필터링
// 3. 추출해낸 배열이 길이로 return
//  3-1. 길이 === 0 => return -1;
//  3-2. 길이 >= 1 => 배열 중 아무거나 (여러 인덱스 중 하나) 리턴
function solution(A) {
  let hash = {};
  const half = A.length / 2;

  for (let i = 0; i < A.length; i++) {
    if (hash[A[i]]) {
      hash[A[i]].push(i);
    } else {
      hash[A[i]] = [i];
    }
  }

  let pick = Object.entries(hash).filter(([key, value]) => value.length > half);
  return pick.length === 0 ? -1 : pick[0][1][0];
}

console.log(solution([3, 4, 3, 2, 3, -1, 3, 3])); // 3
