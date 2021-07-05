// 망한 풀이 ㅠㅠ 
function solution(A) {
    let left = 0;
    let right = A.length - 1;
    const mid = Math.ceil((left + right/ 2))
    const arr = [];

    while (mid < right) {
        const sum = A.slice(left, right + 1).reduce((acc, val) => acc + val, 0);
        const len = right - left + 1;
        arr.push([sum / len, left]);
        if (left < right) {
            left += 1;
        }
        if (left === right) {
            left = 0;
            right -= 1;
        }
    }

    arr.sort((a, b) => a[0] - b[0]);
    arr.sort((a, b) => {
        if (a[0] === b[0]) {
            // 구간 합이 같은 경우, left 즉 시작 인덱스가 작은 순으로 정렬한다.
            return a[1] - b[1];
        } else {
            return a[0] - b[0];
        }
    })
    return arr[0][1];
}

/*
    1) 100,000
    // slice(p, Q + 1), Q - P + 1 -> 평균 구하기 
    (A[P] + A[P + 1] + ... + A[Q]) / (Q - P + 1).

    --- 
    문제 풀이
    1) sum을 구간 별로 구한다. -> 0 ~ 길이까지 점진적인 방법
    2) 길이 별로 나눠준다. 

 */

// 레퍼런스 https://nukeguys.tistory.com/175