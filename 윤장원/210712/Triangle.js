// codility Lesson6. Sort
// https://app.codility.com/demo/results/trainingHTH5RF-WAA/
function solution(A) {
    A.sort((a, b) => a - b);
    
    for (let i = 0; i < A.length - 2; i++) {
        if (A[i] + A[i + 1] > A[i + 2]) {
            return 1;
        }
    }

    return 0;
}

// 두 개의 요소 합이 나머지 하나보다 크면 된다.
// 즉 가장 큰 요소 하나보다 작은 두 개의 요소가 크다면 모든 조건을 만족한다.