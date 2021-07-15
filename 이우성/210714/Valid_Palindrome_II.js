const validPalindrome = function (s) {
  // 팰린드롬 유효성 검사
  const check_palin = (str) => {
    for (let i = 0; i <= parseInt(str.length / 2); i++) {
      if (str[i] !== str[str.length - 1 - i]) {
        return false;
      }
    }

    return true;
  };

  for (let i = 0; i <= parseInt(s.length / 2); i++) {
    if (s[i] !== s[s.length - 1 - i]) {
      if (
        check_palin(s.substring(i, s.length - 1 - i)) ||
        check_palin(s.substring(i + 1, s.length - 1 - i + 1))
      ) {
        return true;
      }

      return false;
    }
  }

  return true;
};

/*
팰린드롬이 아닐 때 무조건 하나를 제거해서 다시 확인할 수 있음.
효율적인 알고리즘 필요
*/
