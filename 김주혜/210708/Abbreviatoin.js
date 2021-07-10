function abbreviation(a, b) {
  let memo = Array(a.length + 1).fill(0);
  memo = memo.map((_) => Array(b.length + 1).fill(0));
  memo[0][0] = 1;

  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j <= b.length; j++) {
      if (memo[i][j] !== 0) {
        if (j < b.length && a[i].toUpperCase() === b[j]) memo[i + 1][j + 1] = 1;
        if (a[i] === a[i].toLowerCase()) memo[i + 1][j] = 1;
      }
    }
  }
  return memo[a.length][b.length] ? "YES" : "NO";
}
