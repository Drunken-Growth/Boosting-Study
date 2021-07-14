// 새로 풀이
function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  const map = new Map();
  for (let x of A) {
    if (!map.has(x)) {
      map.set(x, 1);
    } else {
      map.set(x, map.get(x) + 1);
    }
  }

  for (let key of map.keys()) {
    if (map.get(key) % 2 === 1) {
      return key;
    }
  }
}

// 기존 풀이
function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  let answer;
  const hash = {};
  A.forEach((el) => {
    if (hash[el]) hash[el]++;
    else hash[el] = 1;
  });
  Object.keys(hash).forEach((el) => {
    if (hash[el] % 2 === 1) {
      answer = el;
    }
  });

  return Number(answer);
}
