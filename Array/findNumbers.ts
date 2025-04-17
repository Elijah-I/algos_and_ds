const numbers = [12, 345, 2, 6, 7896];

const findNumbers = (numbers: number[]): number => {
  return numbers.reduce((total, number) => (String(number).length % 2 ? total : ++total), 0);
};

const found = findNumbers(numbers);

console.log(found);
