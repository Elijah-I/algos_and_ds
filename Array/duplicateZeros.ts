const arr = [1, 0, 2, 3, 0, 4, 5, 0];

const duplicateZeros = (arr: number[]): number[] => {
  let pointer = 0;

  while (pointer <= arr.length) {
    let subPointer = arr.length - 1;

    if (arr[pointer] === 0) {
      while (subPointer > pointer) {
        arr[subPointer] = arr[subPointer - 1];
        subPointer--;
      }

      pointer++;
    }

    pointer++;
  }

  return arr;
};

const duplicated = duplicateZeros(arr);

console.log(duplicated);
