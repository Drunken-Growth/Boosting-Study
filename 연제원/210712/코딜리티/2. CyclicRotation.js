// 새로 푼 방식
function solution(A, K) {
  const move = K % A.length;
  const start = A.slice(0, A.length - move);
  const end = A.slice(A.length - move);

  return end.concat(start);
}

// 기존 방식
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
