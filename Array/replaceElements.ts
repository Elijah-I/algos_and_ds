const arr = [17, 18, 5, 4, 6, 1];

const replaceElements = (arr: number[]): number[] => {
  for (let i = arr.length; i > 0; i--) {
    let max = -1;
    const index = arr.length - i;

    for (let j = arr.length; j > index; j--) {
      if (arr[j] > max) max = arr[j];
    }

    arr[index] = max;
  }

  return arr;
};

const replaced = replaceElements(arr);

console.log(replaced);
