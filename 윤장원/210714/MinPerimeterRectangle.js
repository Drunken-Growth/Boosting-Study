// https://app.codility.com/demo/results/training34DCR2-97W/
function solution(N) {
    const result = [];
    for (let i = 1; i <= Math.sqrt(N); i++) {
        if (N % i === 0) result.push((i + N / i) * 2);
    }
    return Math.min(...result);
}
