// https://app.codility.com/demo/results/training36AGXJ-HDZ/
function solution(A) {
    A.sort((a, b) => a - b);
    
    for (let i = 0; i < A.length; i++) {
        if (i + 1 !== A[i]) return 0;
    }
    return 1;
}