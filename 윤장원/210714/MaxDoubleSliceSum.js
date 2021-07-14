// https://app.codility.com/demo/results/trainingB86583-KN5/
function solution(A) {
    const leftSum = Array.from({length: A.length} , () => 0);
    const rightSum = Array.from({length: A.length} , () => 0);
    for (let i = 1; i < A.length - 1; i++) {
        leftSum[i] = Math.max(0, leftSum[i - 1] + A[i]);
    }
    
    for (let i = A.length - 2; i >=0; i--) {
        rightSum[i] = Math.max(0, rightSum[i + 1] + A[i]);
    }

    let max = 0;

    for (let i = 1; i < A.length - 1; i++) {
        max = Math.max(max, rightSum[i + 1] + leftSum[i - 1]);
    }

    return max;
}

// 구간 합 이용 + 메모이제이션
// 0 < X < Y < Z < N