function solution(routes) {
  let result = 0;
  let c = -Infinity;
  routes.sort((a, b) => a[1] - b[1]);
  for (let i = 0; i < routes.length; i++) {
    const start = routes[i][0];
    const end = routes[i][1];
    if (c < start) {
      result += 1;
      c = end;
    }
  }
  return result;
}