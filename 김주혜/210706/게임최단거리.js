/* 프로그래머스 - 게임최단거리 (BFS)*/

function solution(maps) {
  let Q = [[0, 0, 1]];
  maps[0][0] = 0;
  while (Q.length) {
    let [x, y, step] = Q.shift();
    if (x === maps.length - 1 && y === maps[0].length - 1) return step;
    let ables = filterAbles(x, y, step);
    Q.push(...ables);
  }
  return -1;

  // 상하좌우 중 갈 수 있는 곳 확인
  function filterAbles(x, y, step) {
    const moves = [
      [-1, 0],
      [1, 0],
      [0, -1],
      [0, 1],
    ];
    let ables = [];
    for (let i = 0; i < 4; i++) {
      let [nx, ny] = [x + moves[i][0], y + moves[i][1]];
      if (maps[nx] && maps[nx][ny] === 1) {
        maps[nx][ny] = 0;
        ables.push([nx, ny, step + 1]);
      }
    }
    return ables;
  }
}
