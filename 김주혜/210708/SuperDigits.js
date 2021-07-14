/* 해커랭크 - Super Digits (재귀) */

function superDigit(n, k) {
  if (n.length === 1) return n;
  return superDigit(n.split("").reduce((p, c) => p + Number(c), 0) * k + "", 1);
}
