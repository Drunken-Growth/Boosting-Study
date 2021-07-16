// https://app.codility.com/demo/results/trainingGHK65Z-Q9V/
function solution(A) {
    A.sort((a, b) => a - b);
    if (A[A.length - 1] < 0) return 1;
    const set = new Set(A);
    
    for (let i = 1; i <= set.size + 1; i++) {
        if (!set.has(i)) return i;
    }
}