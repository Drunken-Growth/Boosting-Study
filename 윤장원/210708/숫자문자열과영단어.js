// 풀이 1 해시 
function solution(s) {
    let result = '';
    const nums = {
        'zero': '0',
        'one': '1',
        'two': '2',
        'three': '3',
        'four': '4',
        'five': '5',
        'six': '6',
        'seven': '7',
        'eight': '8',
        'nine': '9'
    }
    let nowStr = '';
    for (let i = 0; i < s.length; i++) {
        if (isNum(s[i])) result += s[i];
        else {
            nowStr += s[i];
            if (nums[nowStr]) {
                result += nums[nowStr];
                nowStr = '';
            }
        }
    }
    return +result;
}

// 숫자 판별
const isNum = s => {
    const pattern = '^[0-9]+$';
    return s.match(pattern) ? true : false;
}


// 풀이 2 replace 사용
function solution(s) {
    return Number(s
        .replace(/zero/gi, 0)
        .replace(/one/gi, 1)
        .replace(/two/gi, 2)
        .replace(/three/gi,3)
        .replace(/four/gi, 4)
        .replace(/five/gi, 5)
        .replace(/six/gi, 6)
        .replace(/seven/gi, 7)
        .replace(/eight/gi, 8)
        .replace(/nine/gi, 9));
}