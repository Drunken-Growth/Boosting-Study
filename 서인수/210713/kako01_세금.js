function solution(money, minratio, maxratio, ranksize, threshold, months) {
  const make_Cmoney = (money) =>
    Number(String(money).slice(0, String(money).length - 2) + "00");

  for (let i = 0; i < months; i++) {
    let Cmoney = make_Cmoney(money);
    if (Cmoney < threshold) return money;

    let taxRate = get_taxRate(Cmoney, threshold, ranksize) * 0.01;
    let tax = Cmoney * taxRate;
    money -= tax;
    if (tax === 0) return money;
  }
  return money;

  function get_taxRate(Cmoney, threshold, ranksize) {
    let taxRate = minratio - 1;
    if (Cmoney < threshold) return 0;
    while (Cmoney >= threshold) {
      Cmoney -= ranksize;
      taxRate++;
    }
    return Math.min(taxRate, maxratio);
  }
}

console.log(solution(12345678, 10, 20, 250000, 10000000, 4)); // 9000014
console.log(solution(1000000000, 50, 99, 100000, 0, 6)); // 6150
console.log(solution(123456789, 0, 0, 1, 0, 360)); //123456789
