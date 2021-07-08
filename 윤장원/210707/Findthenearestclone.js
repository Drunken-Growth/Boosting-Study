// 문제 해석
// 특정 color를 입력 받았을 경우, 같은 색깔의 다른 노드에 도달할 수 있는 최단 거리를 구하는 문제이다.

// BFS

// 망한 풀이, DFS 하다가 중간에 틀어버리기
function findShortest(graphNodes, graphFrom, graphTo, ids, val) {
    const directions = [];
    const graph = Array.from({ length: ids.length + 1 }, () => []);
    const visited = Array.from({ length: ids.length + 1 }, () => 0);
    let result = [];
    // exception handling
    let exception = 0;
    
    ids.forEach((x) => {
        if(x === val) exception += 1;
    })
    if (exception < 2) return -1;
    
    for (let i = 0; i < graphFrom.length; i++) {
        directions.push([graphFrom[i], graphTo[i]]);
    }
    // color ids contains, graph implemetations
    for (const [u, v] of directions) {
        const id1 = ids[u - 1];
        const id2 = ids[v - 1];
        graph[u].push([v, id1]);
        graph[v].push([u, id2]);
    }
    
    const dfs = (node, visited, graph, depth, target) => {
        visited[node] = 1;
        for (let i = 0 ; i < graph[node].length; i++) {
            const next = graph[node][i][0];
            const nextId = graph[node][i][1];
            if (visited[next] === 0) {
                result.push(depth + 1);
                dfs(next, visited, graph, depth, target);
            }
        }
    }
    
    for (let i = 1; i <= graphNodes; i++) {
        if (visited[i] === 0) {
            dfs(i, visited, graph, 0, val);   
        }
    }
}