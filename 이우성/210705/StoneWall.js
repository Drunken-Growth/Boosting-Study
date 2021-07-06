function solution(H) {
  let stack = [];
  let answer = 0;

  for (let i = 0; i < H.length; i++) {
    while (stack.length !== 0 && stack[stack.length - 1] > H[i]) {
      stack.pop();
    }

    if (stack.length === 0 || stack[stack.length - 1] < H[i]) {
      stack.push(H[i]);
      answer += 1;
    }

    // console.log(stack);
  }

  return answer;
}

/**
 * 문제 파악
 * 1. 두깨가 일정한 N 미터 벽돌이 있다. 그러나 각각 다른 위치의 다른 높이이다.
 * 2. H[0]은 왼쪽끝부터 H[N - 1] 오른쪽끝까지 있다. H의 요소는 높이를 나타낸다.
 * 3. 벽을 짓는데 최소한으로 들어가는 블락의 개수를 반환한다.
 * 4. H = [8, 8, 5, 7, 9, 8, 7, 4, 8] return 7
 *
 * 수도 코드
 * 1. 일단 큰거 놓고, 현재 블럭보다 작은게 나오면 일단 킵
 * 2. 만약 더 큰게 나오면 큰거 쌓고 그다음 작은거 쌓고 => (7위에 5 올린다)
 * 3. 한 번 더 큰게 나오면 (9위에 7올리고 5올린다)
 * 4. H[i + 1]이 H[i]보다 작다면 벽을 닫는다.
 * 5. H[i + 1]이 H[i]보다 크면 벽을 쌓는다.
 */
