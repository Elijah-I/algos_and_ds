const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 1];
const target = 9;

const search = (numbers: number[], target: number): number => {
  let start = 0;
  let end = numbers.length;

  while (start !== end) {
    const pointer = Math.floor((start + end) / 2);

    if (numbers[pointer] === target) {
      return pointer;
    }

    if (target < numbers[pointer]) {
      if (numbers[start] > target) {
        if (numbers[start] > numbers[pointer]) {
          end = pointer;
        } else {
          start = pointer + 1;
        }
      } else {
        end = pointer;
      }
    } else {
      if (target > numbers[end - 1]) {
        if (numbers[end - 1] < numbers[pointer]) {
          start = pointer + 1;
        } else {
          end = pointer;
        }
      } else {
        start = pointer + 1;
      }
    }
  }

  return -1;
};

const found = search(numbers, target);

console.log(found);
