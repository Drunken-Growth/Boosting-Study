// Medium
// 구현문제로 풀었다.
// 풀이가 깔끔해보이진 않고, 구현 연습하기 위한 용도로 한 번 더 풀어보면 좋을듯

// 접근방법
// 양말의 짝을 찾는 총 3가지 방법이 존재
// 1. Clean 양말에서 2개 이상 존재할 때.
// 2. Clean에서 1개 존재하는 양말이 Dirty에도 존재하여, 한개를 빨아서 세트를 맞출 때
// 3. Clean이 모두 사용했을 때, Dirty에 2짝 이상 있을 때, 두개 다 세탁하여 사용

// 풀이방법

function solution(K, Clean, Dirty) {
  let c = [];
  let d = [];
  let result = 0;
  // 1번케이스 제거
  for (let i = 0; i < Clean.length; i++) {
    c[Clean[i]] = (c[Clean[i]] || 0) + 1;
    if (c[Clean[i]] === 2) {
      result++;
      c[Clean[i]] = 0;
    }
  }

  for (let i = 0; i < Dirty.length; i++) {
    d[Dirty[i]] = (d[Dirty[i]] || 0) + 1;
  }

  //   console.log("1번" + result);
  //2 번케이스제거
  for (let i = 0; i < c.length; i++) {
    if (K > 0 && c[i] === 1 && d[i] > 0) {
      K--;
      result++;
      c[i] = 0;
      d[i] -= 1;
    }
  }
  //   console.log("2번" + result);
  //3번케이스제거 (d에 2개이상남아있는양말있다면)
  while (K > 0 && isPair(d)) {
    for (let i = 0; i < d.length; i++) {
      if (d[i] > 1) {
        K -= 2;
        if (K < 0) return result;
        result++;
        d[i] -= 2;
      }
    }
  }
  //   console.log("3번" + result);

  function isPair(arr) {
    let isPair = false;
    arr.map((el) => {
      if (el >= 2) isPair = true;
    });
    return isPair;
  }

  return result;
}

console.log(
  solution(2, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 4, 3, 2, 4])
); // 8
console.log(solution(2, [1, 2, 1, 1], [1, 4, 3, 2, 4])); // 3
console.log(solution(2, [1, 2, 1, 1, 1, 2], [1, 4, 3, 2, 4])); // 4
console.log(solution(2, [1, 2, 1, 1, 1, 2, 3], [1, 4, 3, 2, 4])); // 4
console.log(solution(1, [1], [4])); // 0
