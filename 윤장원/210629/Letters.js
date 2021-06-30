var letterCasePermutation = function(S) {
    return aux(S, 0);
};

// 알파벳 validation
const isAlpha = (str) => {
    return /[a-z|A-z]/gi.test(str);
}

// 재귀 함수
const aux = (str, pos, res = [], curr = '') => {
    // str.length가 Depth
    if (str.length === curr.length) res.push(curr);
    else {
        // 알파벳인 경우
        if (isAlpha(str[pos])) {
            const upper = str[pos].toUpperCase();
            const lower = str[pos].toLowerCase();
            aux(str, pos + 1, res, curr + upper);
            aux(str, pos + 1, res, curr + lower);
        } else {
            // 숫자인 경우
            aux(str, pos + 1, res, curr + str[pos]);
        }
    }
    
    return res;
}