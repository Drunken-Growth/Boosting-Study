// DFS/BFS
// leetcode 200. Number of Islands
// https://leetcode.com/problems/number-of-islands/

// 풀이 1
var numIslands = function (grid) {
    let result = 0;
    const n = grid.length;
    const m = grid[0].length;
    const dx = [-1, 0, 1, 0];
    const dy = [0, -1, 0, 1];
    
    const dfs = (x, y) => {
        grid[x][y] = '0';
        for (let i = 0 ; i < 4; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];
            
            if (nx >= 0 && nx < n && ny >= 0 && ny < m) {
                if (grid[nx][ny] === '1') {
                    dfs(nx, ny);
                }
            }
        }
    }
    
    for (let row = 0; row < n; row++) {
        for (let col = 0; col < m; col++) {
            if (grid[row][col] === '1') {
                result += 1;
                dfs(row, col);
            }
        }
    }
    return result;
};

// 풀이 2
var numIslands = function (grid) {
    let result = 0;
    const n = grid.length;
    const m = grid[0].length;
    
    const dfs = (x, y) => {
        if (x >= 0 && x < n && y >= 0 && y < m) {
            if (grid[x][y] === '1') {
                grid[x][y] = '0';
                dfs(x + 1, y);
                dfs(x - 1 , y);
                dfs(x, y + 1);
                dfs(x, y - 1);
            }
        }
    }
    
    for (let row = 0; row < n; row++) {
        for (let col = 0; col < m; col++) {
            if (grid[row][col] === '1') {
                result += 1;
                dfs(row, col);
            }
        }
    }
    return result;
};
