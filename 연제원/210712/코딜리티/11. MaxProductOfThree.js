// 새로 풀이
function solution(A) {
  A.sort((a, b) => a - b);
  let answer = Number.MIN_SAFE_INTEGER;
  if (A[0] < 0 && A[1] < 0) {
    answer = Math.max(answer, A[0] * A[1] * A[A.length - 1]);
  }
  answer = Math.max(
    answer,
    A[A.length - 1] * A[A.length - 2] * A[A.length - 3]
  );
  return answer;
}

// 기존 풀이
function solution(A) {
  A.sort((a, b) => a - b);

  let max;

  if (A[0] < 0 && A[1] < 0) {
    // 일단 앞 2개가 음수니깐 고려해줌
    let allYang = A[A.length - 1] * A[A.length - 2] * A[A.length - 3];
    let containTwoUm = A[0] * A[1] * A[A.length - 1];
    max = Math.max(allYang, containTwoUm);
  } else {
    // 그 외엔 고려 X
    max = A[A.length - 1] * A[A.length - 2] * A[A.length - 3];
  }

  return max;
}
