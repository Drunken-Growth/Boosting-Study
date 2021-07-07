// 풀이 1
// 정확성 100%, 퍼포먼스 100%

function solution(H) {
    let result = 0;
    const stack = [];
    stack.push(H[0]);
    for (let i = 1; i < H.length; i++) {
        while (!isEmpty(stack)) {
            if (stack[stack.length - 1] > H[i]) {
                result += 1;
                stack.pop();
            } else if (stack[stack.length - 1] < H[i]) {
                stack.push(H[i]);
                break;
            } else break;
        }
        if (isEmpty(stack)) stack.push(H[i]);
    }

    return result + stack.length;
}

const isEmpty = (stack) => stack.length === 0 ? true : false;

/**
 * 1. 스택이 비어있는 경우 h를 push
 * 2. 스택의 top이 현재 h 요소 보다 큰 경우 -> pop 한 후 블럭 수를 1 증가
 * 3. 스택의ㅣ top의 값이 현재 h 요소 보다 작은 경우 -> h를 push 한다.
 * 4. 스택의 top의 값이 h와 같은 경우 -> 처리 없이 continue
 */