const numbers = [-7, -3, 2, 3, 11];

const sortedSquares = (numbers: number[]): number[] =>
  numbers.map((number) => number * number).sort((a, b) => a - b);

const sorted = sortedSquares(numbers);

console.log(sorted);
