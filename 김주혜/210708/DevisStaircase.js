/* 해커랭크 - Davis' Staircase */

// 재귀 풀이
function stepPerms(n) {
  let cnt = 0;
  aux(0);
  return cnt;

  function aux(sum) {
    if (sum >= n) {
      if (sum === n) cnt++;
      return;
    }
    aux(sum + 1);
    aux(sum + 2);
    aux(sum + 3);
  }
}

// DP 풀이
function stepPerms(n) {
  let arr = [1, 2, 4];
  for (let i = 3; i < n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2] + arr[i - 3];
  }
  return arr[n - 1];
}
