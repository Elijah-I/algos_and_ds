const numbers = [1, 9, 8, 3, 10, 5];

const minimumAverage = (numbers: number[]): number => {
  let min = 0;
  const sortedNumbers = numbers.sort((a, b) => a - b);

  while (sortedNumbers.length) {
    const average = (sortedNumbers.shift() + sortedNumbers.pop()) / 2;

    if (!min || average < min) {
      min = average;
    }
  }

  return min;
};

const min = minimumAverage(numbers);

console.log(min);
