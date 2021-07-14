// 새로 풀이
function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  let answer = 0;

  let east = 0;
  for (let car of A) {
    if (car === 0) {
      east++;
    } else {
      answer += east;
      if (answer > 1000000000) {
        return -1;
      }
    }
  }
  return answer;
}

// 기존 풀이
function solution(A) {
  let answer = 0;
  let count = 0;

  for (let i = A.length - 1; i >= 0; i--) {
    if (A[i] === 1) {
      count++;
    } else {
      // A[i] === 0
      answer += count;
    }
    // console.log("answer", answer, "count", count);
    if (answer > 1000000000) {
      return -1;
    }
  }

  return answer;
}
