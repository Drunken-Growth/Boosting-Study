// https://app.codility.com/demo/results/trainingB3B2YJ-34P/
function solution(M, A) {
    const memo = Array.from({length: M + 1}, () => 0);
    let front = 0;
    let slices = 0;
    const N = A.length;
    for (let back = 0; back < N; back++) {
        while (front < N && memo[A[front]] === 0) {
            memo[A[front]] += 1;
            slices += front - back + 1;
            front += 1;
        }
        memo[A[back]] -= 1;
        if (slices >= 1000000000) return 1000000000;
    }
    return slices
}
