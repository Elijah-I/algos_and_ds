const numbers = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

const removeDuplicates = (numbers: number[] | string[]): number => {
  let pointer = 0;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] !== numbers[i + 1]) {
      numbers[pointer] = numbers[i];
      pointer++;
    }
  }

  return pointer;
};

const clean = removeDuplicates(numbers);

console.log(clean);
