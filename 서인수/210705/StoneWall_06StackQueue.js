// 나중에 다시 풀어보기

//1차풀이
// O(N^2)으로 performance 실패

// 각 idx 마다 해당 높이의 돌을 세운다고 하자. cnt = H.length (9개의 돌을 세움)
// 이 중에서 돌을 합칠 수 있는 경우는, 똑같은 높이의 돌이 존재할 때, 그 사이에서 해당 높이 보다 낮은 돌이 존재하지 않으면 된다.
// 처음 높이 8,8 인경우 합친다.(cnt--) 8,8 사이에 낮은 돌이 없으므로,

// 높이가 7일 때 (idx가 3,6) 3과 6사이에 7보다 낮은 돌이 없으므로 두개의 돌은 하나로 합칠 수 있다.(cnt--)
// 해당 높이와 같거나, 해당 높이보다 높은 돌이 존재하면, 합친 돌 위에 쌓으면 되므로 cnt 영향x (돌 개수를 줄일 수 없다.)

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
