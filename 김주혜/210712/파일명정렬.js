/* 프로그래머스 - 파일명 정렬 */

function solution(files) {
  files = files.map((file) => {
    let i = 0;
    let head = "";
    while (file[i].match(/[A-Za-z]|\.|\-|\ /gi)) {
      head += file[i];
      i++;
    }
    let num = "";
    while (file[i] && file[i].match(/[0-9]/gi) && num.length <= 5) {
      num += file[i];
      i++;
    }
    let tail = file.substring(i);
    return [head, num, tail];
  });
  files.sort((a, b) => {
    if (a[0].toUpperCase() > b[0].toUpperCase()) return 1;
    else if (a[0].toUpperCase() < b[0].toUpperCase()) return -1;
    else {
      if (a[1] !== b[1]) return Number(a[1]) - Number(b[1]);
    }
  });
  return files.map((file) => file.join(""));
}
