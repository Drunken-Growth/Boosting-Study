// leetcode 17. Letter Combinations of a Phone Number
// https://leetcode.com/problems/letter-combinations-of-a-phone-number/
var letterCombinations = function (digits) {
	if (digits == null || digits.length === 0) return [];
	const keypad = {
		'2': 'abc',
		'3': 'def',
		'4': 'ghi',
		'5': 'jkl',
		'6': 'mno',
		'7': 'pqrs',
		'8': 'tuv',
		'9': 'wxyz'
	};
    
	const res = [];
	const dfs = (i, p) => {
		if (p.length === digits.length) {
			res.push(p);
			return;
		}
		for (const c of keypad[digits[i]]) {
			dfs(i + 1, p + c);
		}
	}
	dfs(0, '');
	return res;
};