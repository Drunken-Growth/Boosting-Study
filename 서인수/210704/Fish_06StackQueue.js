// 올라가는 물고기 stack에 담아서 계산하기

function solution(A, B) {
  const N = A.length;
  let upFish = [];
  let aliveCnt = 0;

  for (let i = 0; i < N; i++) {
    // 올라오는 물고기 스택에 넣기
    if (B[i] === 1) {
      upFish.push(A[i]);
    } else {
      while (upFish.length > 0) {
        // 올라오는 물고기 있으면 pop()
        let upFishSize = upFish.pop();
        // 이기면 다시 넣고 다음 물고기 입장.
        if (upFishSize > A[i]) {
          upFish.push(upFishSize);
          break;
        }
      }
      // 올라오는 물고기 없을 때는 cnt++
      if (upFish.length === 0) aliveCnt++;
    }
  }

  //upFish 살아있는 것 더해준다.
  aliveCnt += upFish.length;
  return aliveCnt;
}
