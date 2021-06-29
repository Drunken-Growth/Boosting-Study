function solution(n, computers) {
    let result = 0;
    const ch = Array.from({ length: n }, () => 0);
    
    const dfs = (node) => {
        if(ch[node] === 1) return;
        ch[node] = 1;
        
        for(let i = 0; i < computers.length; i++) {
            if (computers[node][i] === 1 && ch[i] === 0) {
                dfs(i);
            }
        }
    }
    
    for (let i = 0; i < computers.length; i++) {
        if (ch[i] === 0) {
            result += 1;
            dfs(i);
        }
    }
    
    return result;
}