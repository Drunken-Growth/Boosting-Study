function solution(s) {
    if (!s.length) return '';
    let answer = '';
    // 올바른 괄호인 경우
    const [u, v] = split(s);
    if (correct(u)) {
        answer += u + solution(v);
    } else {
        answer += '(' + solution(v) + ')' + reverse(u.substring(1, u.length - 1));
    }
    return answer;
}

const reverse = (s) => {
    let answer = '';
    for (const x of s) {
        x === '(' ? answer += ')' : answer += '(';
    }
    return answer;
}

// 분리 w => u + v
const split = (s) => {
    let cnt = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') cnt += 1;
        else cnt -= 1;
        
        if (cnt === 0) return [s.substring(0, i + 1), s.substring(i + 1)];
    }
}

// 올바른 괄호
const correct = (s) => {
    const stack = [];
    for (const x of s) {
        if (x === '(') stack.push(x);
        else {
            if (stack.length) stack.pop();
            else return false;
        }
    }
    
    return !stack.length;
}