// 1.  p <=  Q 이므로 p 개수만큼 순회하며 시작탐색 idx 와 종료탐색 idx 를 구한다.
// 2. S에서 (시작idx~끝 idx) 자른 문자열(g) 을 구하고,
// 3. for문으로 DNA(4개 순회)
// 3.1 g가 해당 DNA를 포함하고 있으면 resut 객체에 해당 idx 넣는다.
// 이때 DNA 배열을 차례대로 순회하기 때문에 idx가 작은 것이 우선순위가 높음을 보장한다.

function solution(S, P, Q) {
  let DNA = [0, "A", "C", "G", "T"];
  let result = [];
  for (let i = 0; i < P.length; i++) {
    let start = P[i];
    let end = Q[i];
    let g = S.slice(start, end + 1);

    for (let j = 1; j < 5; j++) {
      if (g.includes(DNA[j])) {
        result.push(j);
        break;
      }
    }
  }
  return result;
}
