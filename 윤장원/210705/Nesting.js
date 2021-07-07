// 풀이 1
// 정확성 100%, 퍼포먼스 100%
function solution(S) {
    const stack = [];
    let cnt = 0;
    for (const x of S) {
        if (x === '(') {
            stack.push(x);
            cnt += 1;
        }
        else {
            stack.pop();
            cnt -= 1;
        }
    }

    if (!stack.length && cnt === 0) return 1;
    else return 0;
}

