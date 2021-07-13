// Codility L2 - OddOccurrencesInArray

function solution(A) {
  let hash = {};
  for (let i in A) {
    hash[A[i]] === undefined
      ? (hash[A[i]] = false)
      : (hash[A[i]] = !hash[A[i]]);
  }
  for (let key in hash) {
    if (!hash[key]) return Number(key);
  }
}
