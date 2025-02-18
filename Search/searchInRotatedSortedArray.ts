const numbers = [1, 3, 5];
const target = 1;

const search = (numbers: number[], target: number): boolean => {
  let pivot: number;
  let start = 0;
  let end = numbers.length - 1;

  let first = numbers[start];
  let last = numbers[end];
  let mid: number;

  const getLeft = () => (end = pivot);
  const getRight = () => (start = pivot + 1);

  if (start === end && first === target) {
    return true;
  }

  while (start <= end) {
    pivot = Math.floor((start + end) / 2);
    first = numbers[start];
    last = numbers[end];
    mid = numbers[pivot];

    if (mid === target) {
      return true;
    }

    if (mid === first) {
      start++;
      continue;
    }

    if (mid === last) {
      end--;
      continue;
    }

    if (mid > first) {
      // A
      if (target < mid && target >= first) {
        getLeft();
      } else {
        getRight();
      }
    } else {
      // B
      if (target > mid && target <= last) {
        getRight();
      } else {
        getLeft();
      }
    }
  }

  return false;
};

const isFound = search(numbers, target);

console.log(isFound);
