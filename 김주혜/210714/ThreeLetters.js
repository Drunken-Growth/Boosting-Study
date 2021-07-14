/* Codility - Three Letters */

function solution(A, B) {
  let obj = { A: A, B: B };
  if (A === 0 && B === 0) return "";
  let cur = A >= B ? "A" : "B";
  let ans = "";
  let cnt = 0;
  for (let i = 0; i < A + B; i++) {
    if (cur === "A") ans += "a";
    else ans += "b";
    obj[cur]--;
    cnt++;

    // 다음 후보 정하기
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
      cnt = 0;
    }

    if (cnt === 2) {
      cur = cur === "A" ? "B" : "A";
      cnt = 0;
      continue;
    }
  }
  return ans;
}
