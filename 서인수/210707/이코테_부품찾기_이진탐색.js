function solution(A, B) {
  A.sort((a, b) => a - b);

  let result = [];
  for (let i = 0; i < B.length; i++) {
    result.push(isHave(B[i]));
  }

  function isHave(value) {
    let start = 0;
    let end = A.length - 1;

    while (start <= end) {
      let mid = Math.floor((start + end) / 2);

      console.log([mid, A[mid], value]);
      if (A[mid] === value) {
        return true;
      }
      if (A[mid] > value) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
    return false;
  }

  return result;
}

console.log(solution([8, 3, 7, 9, 2], [5, 7, 9]));
