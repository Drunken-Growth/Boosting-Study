// 풀이방법
// 1. 해당 값이 없으면 객체에 넣어주고, 있으면 제거해준다.
// 2. 정답을 제외하고는 짝수번 등장하므로 결국에 정답 값만이 obj에 남게된다.
// 3. 해당 값을 꺼내서 반환

function solution(A) {
  let obj = {};

  for (const el of A) {
    if (obj[el]) {
      delete obj[el];
    } else {
      obj[el] = el;
    }
  }

  return Object.values(obj)[0];
}
