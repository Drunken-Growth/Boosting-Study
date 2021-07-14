// 새로 풀이
function solution(A) {
  let head = A[0];
  let tail = 0;
  for (let i = 1; i < A.length; i++) {
    tail += A[i];
  }

  let answer = Math.abs(head - tail);
  for (let i = 1; i < A.length - 1; i++) {
    head += A[i];
    tail -= A[i];
    if (head === tail) {
      return 0;
    }
    answer = Math.min(answer, Math.abs(head - tail));
  }
  return answer;
}

// 기존 풀이
function solution(A) {
  let leftSum = A[0];
  let rightSum = A.slice(1).reduce((acc, cur) => acc + cur);
  let answer = Math.abs(leftSum - rightSum);

  for (let i = 1; i < A.length - 1; i++) {
    leftSum += A[i];
    rightSum -= A[i];
    answer = Math.min(answer, Math.abs(leftSum - rightSum));
  }

  return answer;
}
