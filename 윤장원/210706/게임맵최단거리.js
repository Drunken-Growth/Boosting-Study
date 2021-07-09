// https://programmers.co.kr/learn/courses/30/lessons/1844?language=javascript
function solution(maps) {
    // 좌, 하, 우, 상
    const dx = [-1, 0, 1, 0];
    const dy = [0, -1, 0, 1];
    const n = maps.length;
    const m = maps[0].length;
    
    const q = [];
    q.push([0, 0]);
    visited[0][0] = 1;
    
    while (q.length) {
        const [x, y] = q.shift();
        for (let i = 0; i < 4; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];
            if (nx >= 0 && nx < n && ny >= 0 && ny < m) {
                if (maps[nx][ny] === 1) {
                    maps[nx][ny] = maps[x][y] + 1;
                    q.push([nx, ny]);
                }
            }
        }
    }
    
    if (maps[n - 1][m - 1] > 1) return maps[n - 1][m - 1];
    else return -1;
}
