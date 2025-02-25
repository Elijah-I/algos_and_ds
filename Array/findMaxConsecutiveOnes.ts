const numbers = [1, 1, 0, 1, 1, 1];

const findMaxConsecutiveOnes = (numbers: number[]): number => {
  let current = 0;
  let max = 0;

  numbers.forEach((num) => {
    if (num === 1) {
      current++;
    } else {
      max = Math.max(current, max);
      current = 0;
    }
  });

  return Math.max(current, max);
};

const maxConsecutiveOnes = findMaxConsecutiveOnes(numbers);

console.log(maxConsecutiveOnes);
