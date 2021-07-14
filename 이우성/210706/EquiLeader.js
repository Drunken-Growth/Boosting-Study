function solution(A) {
  let left_hash = {};
  let right_hash = {};

  for (let i = 0; i < A.length; i++) {
    if (right_hash[A[i]] === undefined) {
      right_hash[A[i]] = 0;
    }

    right_hash[A[i]] += 1;
  }

  let equiLeader_count = 0;
  let left_leader = "";
  let left_length = 0;
  let left_leader_count = 0;
  let right_length = A.length;

  for (let i = 0; i < A.length; i++) {
    // 오른쪽을 왼쪽으로 하나씩 옮기기
    right_hash[A[i]] -= 1;
    right_length -= 1;

    if (left_hash[A[i]] === undefined) {
      left_hash[A[i]] = 0;
    }
    left_hash[A[i]] += 1;
    left_length += 1;

    // 왼쪽 leader 체크
    if (left_leader_count < left_hash[A[i]]) {
      left_leader = A[i];
      left_leader_count = left_hash[A[i]];
    }

    // equi leader 체크
    if (
      right_hash[left_leader] > parseInt(right_length / 2) &&
      left_leader_count > parseInt(left_length / 2)
    ) {
      equiLeader_count += 1;
    }
  }

  return equiLeader_count;
}

/**
 * 문제 파악
 * 0. 시간 복잡도 O(n^2) 미만
 * 1. 배열 A의 요소가 반 이상 넘게 있으면 그 요소가 leader이다.
 * 2. equi leader는 A[0], A[1], ..., A[S] and A[S + 1], A[S + 2], ..., A[N - 1]
 * 3. 위 두개가 연속적이고 같은 값을 가지는 리더들이다.
 * 4. 주어진 배열 A = [4, 3, 4, 4, 4, 2]  return 2
 *
 * 수도 코드
 * 1. 왼쪽 객체와 오른쪽 객체를 만들고, 오른쪽 객체에 배열 요소의 갯수를 담아둔다.
 * 2. 그리고 오른쪽 객체에서 비어있는 왼쪽 객체에 요소를 하나씩 넣어주면서 leader인지 체크한다.
 */
