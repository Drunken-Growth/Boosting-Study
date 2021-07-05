// Write a function:

// function solution(A);

// that, given an array A of N integers,
// returns the smallest positive integer (greater than 0) that does not occur in A.

// N개의 정수가 담긴 배열 A가 주어질 때, A에 존재하지 않는 양의정수중 가장 작은 값을 구하라~!

// 단순 정렬 시 O(N logN)
// for문 시 O(N)
function solution(A) {
  A.sort((a, b) => a - b);

  // 전부 음인 경우 미리 처리
  if (A[A.length - 1] <= 0) {
    return 1;
  }

  let cur = 0;

  // A의 요소들 중 양수, cur보다 큰 값을 때 (중복되는 경우가 있으므로)
  // => [1,1,2,4] 인 경우 두번째 1에서 이 조건을 추가안해주면 오류!
  // 또 조건을 추가해줘서 판단~
  for (let x of A) {
    if (x > 0 && x > cur) {
      if (x !== cur + 1) {
        return cur + 1;
      } else {
        cur++;
      }
    }
  }

  // 도중에 리턴이 안된다는 뜻은 끝까지 순서대로 이어졌기 대문에 + 1해서 리턴~!ㄴ
  return cur + 1;
}

console.log(solution([1, 3, 6, 4, 1, 2])); // 5
console.log(solution([1, 2, 3])); // 4
console.log(solution([-1, -3])); // 1
