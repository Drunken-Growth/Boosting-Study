function solution(n, arr) {
  let result = "";
  for (let i = 0; i < arr.length; i++) {
    if (i === n - 1) {
      result = arr[i];
    }
  }
  return result;
}

console.log(solution(3, ["Apple", "Banana", "Cat", "Dance", "Enjoy"])); //Cat
