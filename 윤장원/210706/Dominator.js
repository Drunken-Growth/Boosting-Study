// 풀이 1
// 정확성 100% 퍼포먼스 100%
function solution(A) {
  const hash = {};
  const half = A.length / 2;
  A.forEach((x, i) => {
    !hash[x] ? hash[x] = [i] : hash[x].push(i);
  })
  const result = Object.values(hash).filter(x => x.length > half);
  return result.length === 0 ? -1 : result[0][0];
}

// 첫번째 망한 풀이 1
// 정확성 62% 퍼포먼스 100%
function solution(A) {
  // 예외 처리
  if (A.length === 0) return -1;
  const hash = new Map();
  for (const x of A) {
      !hash.has(x) ? hash.set(x, 1) : hash.set(x, hash.get(x) + 1);
  }
  let target = 0;
  const result = [];

  const m = [...hash].sort((a, b) => b[1] - a[1]);
  if (m[0][1] >= Math.ceil(A.length / 2)) {
      target = m[0][0];
  }
  A.forEach((x, i) => x === target ? result.push(i) : false);
  return result.length > 0 ? result[0] : -1;
}