// 풀이 1
// 정확성 100% 퍼포먼스 100% 
function solution(A) {
    let max = 0;

    // 누적 합 확인을 위해 reduce 사용
    const sum = A.reduce((prev, curr) => {
        const next = prev + curr;
        // 만약 음수가 나온다면 0을 반환하고 다시 누적합 시작
        if (next < 0) return 0;
        // max가 더 큰 경우 누적 합 계속 진행
        if (next < max) return next;

        // 현재 누적값이 max 보다 더 크거나 같은 경우 max 값을 갱신
        return max = next;
    }, 0);
    // max가 0이라면 누적합은 계속해서 -가 나온다. 그렇기 때문에 기존 배열에서 단일 요소 중 가장 큰 값을 반환
    return max === 0 ? Math.max(...A) : max;
}

// 풀이 2 카데인 알고리즘 사용
// 카데인 알고리즘은 최대값을 slice 하는 문제에 사용한다.

function solution(A) {
    let result = A[0];
    let max = A[0];

    for (let i = 1; i < A.length; i++) {
        max = Math.max(A[i], max + A[i]);
        result = Math.max(result, max);
    }

    return result;
}