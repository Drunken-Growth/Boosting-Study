// https://leetcode.com/problems/combinations/

// 숫자 조합

const combine = (n, k) => {
  const result = [];
  const tmp = Array.from({ length: k }, () => 0);

  const aux = (L, s) => {
    if (L === k) result.push(tmp.slice());
    else {
      for (let i = s; i <= n; i++) {
        tmp[L] = i;
        aux(L + 1, i + 1);
      }
    }
  }
  aux(0, 1);
  return result;
}