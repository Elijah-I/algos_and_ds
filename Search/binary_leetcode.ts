const numbers = [-1, 0, 3, 5, 9, 12];

const search = (numbers: number[], target: number): number => {
  let start = 0;
  let end = numbers.length;

  while (start !== end) {
    const pointer = Math.floor((start + end) / 2);

    if (numbers[pointer] === target) {
      return pointer;
    }

    if (target < numbers[pointer]) {
      end = pointer;
    } else {
      start = pointer + 1;
    }
  }

  return -1;
};

const find9 = search(numbers, 9);
console.log(find9);

const find3 = search(numbers, 3);
console.log(find3);

const find2 = search(numbers, 2);
console.log(find2);
