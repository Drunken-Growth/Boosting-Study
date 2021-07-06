/* 코딜리티 L7 - Fish */

function solution(A, B) {
  let arr = Array(A.length).fill(0);
  arr = arr.map((el, i) => [i, A[i], B[i]]); // 번호, 크기, 방향
  let stack = [];

  let i = 0;
  while (i < arr.length) {
    let stackTop = stack[stack.length - 1];
    if (stackTop && stackTop[2] === 1 && arr[i][2] === 0) {
      if (stackTop[1] > arr[i][1]) i++;
      else stack.pop();
    } else {
      stack.push(arr[i]);
      i++;
    }
  }
  return stack.length;
}
