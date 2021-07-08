// 풀다가 중간에 포기 ㅠㅠ 다시 풀기
function solution(places) {
    // 좌부터 반시계 방향
    const dx = [-1, -1, 0, 1, 1, 1, 0, -1];
    const dy = [0, -1, -1, -1, 0, 1, 1, 1];
    const result = [];
    
    for (const place of places) {
        const graph = [];
        place.forEach((x) => graph.push(x.split('')));
        const visited = Array.from({ length: graph.length }, () => Array.from({ length: graph[0].length }, () => 0));
        
        // check
        const dfs = (arr, x, y) => {
            let passengers = [];
            visited[x][y] = 1;
            if (arr[x][y] === 'P') {
                passengers.push([x, y]);
            }
            
            for (let i = 0 ; i < 4; i++) {
                const nx = x + dx[i];
                const ny = y + dy[i];
                
                if (nx >= 0 && nx < arr.length && ny >= 0 && ny < arr[0].length && visited[nx][ny] === 0) {
                    // 방문 처리
                    visited[nx][ny] = 1;
                    
                    if (graph[nx][ny] === 'P')
                }
            }
        }
        
        for (let i = 0 ; i < graph.length; i++) {
            for (let j = 0; j < graph[0].length; j++) {
                if (visited[i][j] === 0) {
                    dfs(graph, i, j);
                }
            }
        }
    }
}

/*
    * 1) 빈 테이블
    * 2) P, 사람, O 빈테이블, X 파티션
*/