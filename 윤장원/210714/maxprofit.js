// https://app.codility.com/demo/results/trainingVF3KTK-G4D/
function solution(A) {
    let min = Infinity;
    let max = 0;
    for (let i = 0; i < A.length; i++) {
        if (min > A[i]) min = A[i]; // 최소값 갱신
        max = Math.max(max, A[i] - min);
    }
    return max;
}