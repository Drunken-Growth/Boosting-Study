function solution(n, results) {
    const graph = Array.from({ length: n + 1 }, () => Array.from({ length: n + 1 }, () => Infinity));

    // 그래프 구성 
    results.forEach(([a, b]) => graph[a][b] = 1);
    
    // 플로이드 와샬
    for (let i = 1; i <= n; i++)
        for (let j = 1; j <= n; j++)
            for (let k = 1; k <= n; k++)
                graph[j][k] = Math.min(graph[j][k], graph[j][i] + graph[i][k]);

    let result = 0;
    for (let i = 1; i <= n; i++){
        let cnt = 0;
        for(let j = 1; j <= n; j++) if(graph[i][j] !== Infinity || graph[j][i] !== Infinity) cnt++;
        if(cnt === n - 1) result += 1;
    }
    return result;
}