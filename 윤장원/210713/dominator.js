// https://app.codility.com/demo/results/trainingDY4U4N-QGW/
function solution(A) {
    const hash = {};
    const half = A.length / 2;
    
    A.forEach((x, i) => {
        !hash[x] ? hash[x] = [i] : hash[x].push(i);
    })
    const result = Object.entries(hash).filter((x) => x[1].length > half);
    return result.length ? result[0][1][0] : -1;
}