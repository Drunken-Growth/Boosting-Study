// DFS를 통한 순회
const dfs = (city, graph, visited) => {
	// 방문 처리
	visited[city]= 1;
	for(let i = 0; i < graph[city].length; i++){
			const next = graph[city][i];
			if(visited[next] === 0) dfs(next, graph, visited);
	}
}

function roadsAndLibraries(n, c_lib, c_road, cities) {
  // 예외 사항
  // 라이브러리가 도로 건설보다 작은 경우 라이브러리만 건설하면 된다.
	if (c_lib <= c_road) return n * c_lib;
	const visited = Array.from({ length: n + 1 }, () => 0);
	const graph = Array.from({ length: n + 1 }, () => []);
	let result = 0;
	for (const [u, v] of cities) {
		graph[u].push(v);
		graph[v].push(u);
	}

  for(let i = 1 ; i < n + 1; i++) {
		if(!visited[i]){
				dfs(i, graph,visited);
				result++
		}
	}
	
	// 라이브러리 개수 * result + 도로 건설 수 * (n - result)
  return c_lib * result + c_road * (n - result);
}