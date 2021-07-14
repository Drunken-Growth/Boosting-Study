// You are going to build a stone wall.
// The wall should be straight and N meters long,
// and its thickness should be constant;
// however, it should have different heights in different places.
// The height of the wall is specified by an array H of N positive integers.
// H[I] is the height of the wall from I to I+1 meters to the right of its left end.
// In particular, H[0] is the height of the wall's left end and H[N−1] is the height of the wall's right end.

// The wall should be built of cuboid stone blocks (that is, all sides of such blocks are rectangular).
// Your task is to compute the minimum number of blocks needed to build the wall.

// 돌벽을 지으려 하는데, 곧고 N미터 길이, 굵기가 일정하게 지어져야 한다.
// 하지만, 다른 높이를 가질 수 밖에 없다.
// 벽 높이는 N개의 정수로 이루어진 H배열로 나타낼 수 있다.
// H[I]는 I ~ I+1 의 왼쪽 끝부터 오른쪽까지의 높이다.
// H[0]은 벽의 왼쪽 끝의 높이고, H[N-1]은 오른쪽 끝의 높이다.

// 목표는 벽을 짓는데 최소한의 돌의 갯수

// 풀이
// 마지막 문제니깐 큐를 사용?
// 인줄 알았는데 스택이 나을듯..!
// 유사 괄호문제?

// 현재 벽돌이 이전 벽돌보다 작으면 현재 벽돌보다 작은 벽돌이 나올때까지 큰 이전의 벽돌들을 없앤다!
// 현재 벽돌이 이전 벽돌보다 크거나, 이전 벽돌이 존재하지 않으면 스택에 push, 벽돌개수 + 1
function solution(H) {
  let answer = 0;
  const stack = [];
  const N = H.length;

  for (let i = 0; i < N; i++) {
    while (stack.length !== 0 && stack[stack.length - 1] > H[i]) {
      stack.pop();
    }

    if (stack.length === 0 || stack[stack.length - 1] < H[i]) {
      stack.push(H[i]);
      answer++;
    }
    // console.log(i, stack);
  }

  return answer;
}

console.log(solution([8, 8, 5, 7, 9, 8, 7, 4, 8])); // 7
