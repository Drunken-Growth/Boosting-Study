// 풀이 1
// 정확성 100%, 퍼포먼스 100%
function solution(A) {
    let cnt = 0;
    let sum = 0;
    
    for (let i = 0 ; i < A.length; i++) {
        if (A[i] === 0) cnt += 1;
        else {
            sum += cnt * A[i];
            if (sum > 1000000000) return -1;
        }
    }

    return sum;
}

/*
    ---
    문제 풀이

    1. 구간 별로 서쪽으로 지나가는 차, 동쪽으로 지나가는 차를 구한다. 서쪽은 1, 동쪽은 0
    2. 서쪽으로 가는 차 *  구간 별 동쪽 차의 개수
 */