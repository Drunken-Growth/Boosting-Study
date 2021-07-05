// 나중에 다시 풀어보기

//1차풀이
// O(N^2)으로 performance 실패

function solution(H) {
  let cnt = H.length;
  let arr = [];
  for (let i = 0; i < H.length; i++) {
    let height = H[i];
    // console.log(arr)
    if (arr.includes(height)) cnt--;
    arr.push(height);
    arr = arr.filter((el) => el <= height);
  }
  return cnt;
}

// 2차풀이
// 구글링 참고하여 O(N)으로 풀이.

function solution(H) {
  let cnt = 0;
  let stack = [];
  for (let i = 0; i < H.length; i++) {
    let height = H[i];
    // 존재하는 돌 중에 현재높이보다 큰 것이 있다면 사용불가 (pop)
    while (stack.length > 0 && stack[stack.length - 1] > height) {
      stack.pop();
    }

    // 돌이 비어있거나, 현재 높이가 마지막 돌보다 높다면 쌓아야한다.
    if (stack.length === 0 || stack[stack.length - 1] < height) {
      stack.push(height);
      cnt++;
    }
  }
  return cnt;
}
