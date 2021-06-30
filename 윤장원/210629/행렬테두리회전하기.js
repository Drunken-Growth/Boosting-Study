function solution(rows, columns, queries) {
    const board = Array.from({ length: rows }, () => Array.from({ length: columns }, () => 0));
    const result = [];
    
    // board 만들어주기
    for (let i = 0; i < board.length; i++) {
        let s = i * columns;
        for (let j = 0; j < board[0].length; j++) {
            s += 1;
            board[i][j] = s;
        }
    }
    
    queries.forEach((q) => {
        
        // x는 행 y는 열 
        const [x1, y1, x2, y2] = q.map((pos) => pos - 1);
        const queue = [];
        // 1) 행 고정, 열 증가
        for (let i = 0; i < y2 - y1; i++) queue.push(board[x1][y1 + i]);
        // 2) 행 증가, 열 고정
        for (let i = 0; i < x2 - x1; i++) queue.push(board[x1 + i][y2]);
        // 3) 행 고정, 열 감소
        for (let i = 0; i < y2 - y1; i++) queue.push(board[x2][y2 - i]);
        // 4) 행 감소, 열 고정
        for (let i = 0; i < x2 - x1; i++) queue.push(board[x2 - i][y1]);
        
        // 사이클 끝 
        
        queue.unshift(queue.pop());
        // queue에서 최소값 구하기
        result.push(Math.min(...queue));
        // 큐를 기반으로 값 변경해주기
        for (let i = 0; i < y2 - y1; i++) board[x1][y1 + i] = queue.shift();
        for (let i = 0; i < x2 - x1; i++) board[x1 + i][y2] = queue.shift();
        for (let i = 0; i < y2 - y1; i++) board[x2][y2 - i] = queue.shift();
        for (let i = 0; i < x2 - x1; i++) board[x2 - i][y1] = queue.shift();
    })
    
    return result;
}