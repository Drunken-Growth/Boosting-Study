// leetcode 207. Course Schedule
// 사이클 판별

var canFinish = function (numCourses, prerequisites) {
    const graph = Array.from({length: numCourses}, () => []);
    
    for (const [s, e] of prerequisites) {
        graph[s].push(e);
    }
    
    const trace = new Set();
    const visited = new Set();
    
    const dfs = (i) => {
        if (trace.has(i)) return false;
        if (visited.has(i)) return true;
        
        trace.add(i);
        
        for (const x of graph[i]) {
            if (!dfs(x)) return false;
            trace.remove(i);
            visited.add(i);
        }
    }
    
    for (let i = 0; i < graph.length; i++) {
        graph[i].forEach((x) => {
            if (!dfs(x)) return false;
        })
    }
    return true;
};