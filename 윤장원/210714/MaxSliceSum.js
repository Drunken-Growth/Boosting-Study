// https://app.codility.com/c/run/trainingDFMH99-8R2/
function solution(A) {
    let result = A[0];
    let max = A[0];
    
    for (let i = 1; i < A.length; i++) {
        max = Math.max(A[i], max + A[i]);
        result = Math.max(result, max);
    }
    return result;
}