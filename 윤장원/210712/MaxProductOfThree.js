// Codility Lesson 6. https://app.codility.com/demo/results/training6GTYW5-MAS/
function solution(A) {
    A.sort((a, b) => a - b);
    const result = [];
    const start = A.slice(0, 2).reduce((acc, val) => acc * val, 1) * A[A.length - 1];
    const end = A.slice(-3).reduce((acc, val) => acc * val, 1);
    result.push(start);
    result.push(end);
    return Math.max(...result);
}

/**
 * 1. 주어진 인자를 정렬 한다.
 * 2. 정렬한 배열에서 뒤에서 세 자리를 잘라 확인한다.
 * 3. 앞에서 음수가 두 개 이상이 나올수 있으므로 두 개 까지 끊고 배열의 맨 뒤 요소를 곱해 음수 포함 나올수 있는 가장 큰 수를 구한다.
 * 4. result 배열에 넣어 더 큰 수를 반환한다.
 */