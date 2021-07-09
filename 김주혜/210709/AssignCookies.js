/* 리트코드 - 455. Assign Cookies (그리디) */

var findContentChildren = function (g, s) {
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);
  let [cookie, child] = [0, 0];

  while (true) {
    if (s[cookie] >= g[child]) {
      cookie++;
      child++;
    } else cookie++;
    if (cookie >= s.length) return child;
  }
};
