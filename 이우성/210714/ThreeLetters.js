// 주혜님 코드 보면서 공부함

function solution(A, B) {
  if (A === 0 && B === 0) return "";

  let obj = { A: A, B: B };
  let cur = A >= B ? "A" : "B";
  let answer = "";
  let count = 0;

  for (let i = 0; i < A + B; i++) {
    if (cur === "A") answer += "a";
    else answer += "b";

    obj[cur]--;
    count++;

    if (obj["A"] === 0) {
      cur = "B";
      continue;
    }

    if (obj["B"] === 0) {
      cur = "A";
      continue;
    }

    let next = obj["A"] >= obj["B"] ? "A" : "B";
    if (next !== cur) {
      cur = next;
      count = 0;
    }

    if (count === 2) {
      cur = cur === "A" ? "B" : "A";
      count = 0;
      continue;
    }
  }

  return answer;
}

/**
 * A나 B가 3번 연속되면 안된다.
 * 적어도 하나의 솔루션은 있다.
 * 큰거 먼저 뿌린다.
 * 홀수면 3으로 나눈 나머지만큼 뿌린다.
 * 짝수면 2개씩 뿌린다.
 */
