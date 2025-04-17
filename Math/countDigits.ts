const countDigits = (num: number): number =>
  String(num)
    .split('')
    .reduce((total, digit) => (total += Number(num % Number(digit) === 0)), 0);

const total = countDigits(1248);

console.log(total);
