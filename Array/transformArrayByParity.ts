const numbers = [1, 5, 1, 4, 2];

const transformArrayByParity = (numbers: number[]): number[] => {
  let even = 0;
  let odd = 0;

  numbers.forEach((number) => {
    if (number % 2 !== 0) {
      even++;
    } else {
      odd++;
    }
  });

  return Array(odd).fill(0).concat(Array(even).fill(1));
};

const transformed = transformArrayByParity(numbers);

console.log(transformed);
