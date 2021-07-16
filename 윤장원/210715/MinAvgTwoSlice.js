// 시간복잡도를 줄이고 싶으면 기준점을 잡고 그 기준점을 대상으로 비교하면서 나간다.
// https://app.codility.com/demo/results/trainingCPZ4W6-8CD/

function solution(A) {
    let minIdx = 0;
    let minAvg = (A[0] + A[1]) / 2;

    for (let i = 2; i < A.length; i++) {
        const a = (A[i] + A[i - 1] + A[i - 2]) / 3;
        if (minAvg > a) {
            minAvg = a;
            minIdx = i - 2;
        }

        const b = (A[i] + A[i - 1]) / 2;
        if (minAvg > b) {
            minAvg = b;
            minIdx = i - 1;
        }
    }
    return minIdx;
}

// 시작점을 찾아라