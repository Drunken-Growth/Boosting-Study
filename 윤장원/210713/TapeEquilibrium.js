function solution(A) {
    let left = 0;
    let right = A.reduce((a, b) => a + b, 0);
    let result = Infinity;
    for (let i = 0; i < A.length - 1; i++) {
        left += A[i];
        right -= A[i];
        result = Math.min(result, Math.abs(left - right));
    }
    return result;
}