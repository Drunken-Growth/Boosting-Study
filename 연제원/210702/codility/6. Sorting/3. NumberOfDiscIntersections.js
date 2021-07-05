// We draw N discs on a plane.
// The discs are numbered from 0 to N − 1.
// An array A of N non-negative integers, specifying the radiuses of the discs, is given.
// The J-th disc is drawn with its center at (J, 0) and radius A[J].

// We say that the J-th disc and K-th disc intersect if J ≠ K
// and the J-th and K-th discs have at least one common point
// (assuming that the discs contain their borders).

// 문제
// 평면(좌표계)에 N개의 원을 그린다. 0 ~ N-1로 번호가 새겨져있다.
// 배열 A의 요소는 전부 0, 양의 정수이고, 반지름을 뜻한다
// => i는 중심점, A[i]는 반지름
// J, K 값이 다를 때, 한점이라도 닿으면 (접하거나 겹침) => 겹친다고 한다.

// N = 6, A = [1,5,2,1,4,0] 일 때
// 11을 리턴해야함

// 풀이
// 겹치는 조건(속해있지 않고, 닿지도 않는 경우)
// 1. 밖에서 접하는 경우
// => Q - P === A[Q] + A[P]
// 2. 교차하는 경우
// => Q - P < A[Q] + A[P]
// 3. 안에서 접하는 경우
// => Q - P === |A[Q] - A[P]|

// 우선 Q - P <= A[Q] + A[P] 여야한다.
// 2. 이때, 속하는 경우가 있으므로

// 이렇게 하면 시간복잡도 O(N^2) 나올 듯..?
// => 역시 시간 초과!
function solutionFail(A) {
  let answer = 0;

  for (let P = 0; P <= A.length - 1; P++) {
    for (let Q = P + 1; Q <= A.length; Q++) {
      if (
        Q - P === A[Q] + A[P] ||
        Q - P < A[Q] + A[P] ||
        Q - P === Math.abs(A[Q] - A[P])
      ) {
        answer++;
        if (answer > 10000000) {
          return -1;
        }
      }
    }
  }
  return answer;
}

// 일단 정렬 문제니까 O(N logN)로 풀자!
// 1. 기존 배열 변경, 중심말고 왼, 오 좌표 (y = 0일때)
//  1.1 [1,5,2,1,4,0] => [ [ -1, 1 ], [ -4, 6 ], [ 0, 4 ], [ 2, 4 ], [ 0, 8 ], [ 5, 5 ] ]
//  1.2 이를 각 원의 왼쪽좌표를 기준으로 정렬
//      => [ [ -4, 6 ], [ -1, 1 ], [ 0, 4 ], [ 0, 8 ], [ 2, 4 ], [ 5, 5 ] ]
// 2. 기준을 P, 비교대상을 Q라고 했을 때
//  2.1 접하는 경우 : P[0] === Q[0] || P[1] === Q[0] || P[1] === Q[1]
//  2.2 교차하는 경우 : P[1] > Q[0]
//  2.3 이 조건만 쓰면 결국 O(N^2)이므로 P[1] >= Q[0] 이외면 break

// 문제를 잘 읽자!!!!!!! => 포함도 가능 ㅠ
// 그냥 P[1] >= Q[0] 이면 만족함
function solution(A) {
  let answer = 0;
  let range = A.map((radius, idx) => [idx - radius, idx + radius]);
  range.sort((a, b) => a[0] - b[0]);

  for (let P = 0; P < range.length - 1; P++) {
    for (let Q = P + 1; Q < range.length; Q++) {
      if (range[P][1] >= range[Q][0]) {
        answer++;
      } else {
        break;
      }

      if (answer > 10000000) {
        return -1;
      }
    }
  }

  return answer;
}

console.log(solution([1, 5, 2, 1, 4, 0])); // 11
