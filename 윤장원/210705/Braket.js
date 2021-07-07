// 풀이 1
// 정확성 100%, 퍼포먼스 100%
function solution(S) {
    const stack = [];
    for (const x of S) {
        if (x === '(' || x === '{' || x === '[') stack.push(x);
        else {
            if (x === ')') {
                if (stack[stack.length - 1] === '(') stack.pop();
                else return 0;
            }

            if (x === '}') {
                if (stack[stack.length - 1] === '{') stack.pop();
                else return 0;
            }

            if (x === ']') {
                if (stack[stack.length - 1] === '[') stack.pop();
                else return 0;
            }
        }
    }

    return stack.length === 0 ? 1 : 0;
}

const isEmpty = (arr) => arr.length === 0 ? true : false;