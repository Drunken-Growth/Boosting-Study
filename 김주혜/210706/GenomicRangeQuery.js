/* L5 - GenomicRangeQuery */

function solution(S, P, Q) {
  const DNA = { A: 1, C: 2, G: 3, T: 4 };
  let ans = [];
  for (let i = 0; i < P.length; i++) {
    let arr = S.slice(P[i], Q[i] + 1);
    for (let key in DNA) {
      if (arr.includes(key)) {
        ans.push(DNA[key]);
        break;
      }
    }
  }
  return ans;
}
