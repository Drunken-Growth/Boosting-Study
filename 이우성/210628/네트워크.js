function solution(n, computers) {
    
  const bfs = (computer) => {
      let q = [computer];
      
      while (q.length !== 0) {
          let vertax = q.shift();
          
          for (let i = 0; i < computers.length; i++) {
              if (visited[i] === false && computers[vertax][i] === 1) {
                  q.push(i);
                  visited[i] = true;
              }
          }
      }
      return;
  }
  
  let answer = 0;
  let visited = new Array(n).fill(false);
  
  for (let i = 0; i < n; i++) {
      if (visited[i] === false) {
          bfs(i);
          answer += 1;
      }
  }
  
  return answer;
}

/*
bfs 접근 방식
n만큼 반복문을 돌아 bfs가 끊어지면 연결이 끊어진 것으로 간주한다.
연결이 끊어지면 카운팅한다.
*/