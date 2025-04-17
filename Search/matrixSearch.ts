const matrix = [[1], [3], [5]];
const target = 5;

const binarySearch = (array: number[], target: number) => {
  let start = 0;
  let end = array.length;

  if (target < array[start]) {
    return -1;
  }

  if (target > array[end - 1]) {
    return 1;
  }

  while (start !== end) {
    const current = Math.floor((start + end) / 2);

    if (array[current] === target) {
      return true;
    }

    if (target < array[current]) end = current;
    else start = current + 1;
  }

  return false;
};

const searchMatrix = (matrix: number[][], target: number): boolean => {
  let start = 0;
  let end = matrix.length;

  while (start !== end) {
    const current = Math.floor((start + end) / 2);
    const searchResult = binarySearch(matrix[current], target);

    if (typeof searchResult == 'boolean') {
      return searchResult;
    }

    if (searchResult === -1) end = current;
    else start = current + 1;
  }

  return false;
};

const isInMatrix = searchMatrix(matrix, target);

console.log(isInMatrix);
