const numbers = [2, 1];

const findMin = (numbers: number[]): number => {
  let start = 0;
  let end = numbers.length - 1;

  while (start !== end) {
    const pivot = Math.floor((start + end) / 2);

    if (numbers[pivot + 1] < numbers[pivot]) {
      if (numbers[pivot + 1] === undefined) {
        return numbers[pivot];
      }
      return numbers[pivot + 1];
    }

    if (numbers[pivot - 1] === undefined || numbers[pivot - 1] > numbers[pivot]) {
      return numbers[pivot];
    }

    if (numbers[pivot] < numbers[end]) {
      end = pivot;
    } else {
      start = pivot + 1;
    }
  }

  return numbers[0];
};

const min = findMin(numbers);

console.log(min);
