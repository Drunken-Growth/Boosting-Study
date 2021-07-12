function solution(dirs) {
    const visited = new Set();
    const move = { U: [0, 1], D: [0, -1], L: [-1, 0], R: [1, 0]};
    let [x, y] = [0, 0];
    
    for (let i = 0; i < dirs.length; i++) {
        const [dx, dy] = move[dirs[i]];
        const nx = x + dx;
        const ny = y + dy;
        
        if (nx > 5 || nx < -5 || ny > 5 || ny < -5) continue;
        visited.add("" + nx + ny + x + y);
        visited.add("" + x + y + nx + ny);
        x = nx;
        y = ny;
    }
    return visited.size / 2;
}