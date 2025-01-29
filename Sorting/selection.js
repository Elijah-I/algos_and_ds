const unsortedArray = [10, 5, 2, 3, 0, -1, 11];

const selectionSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    let minValueIndex = i;

    for (let j = i; j < array.length; j++) {
      if (array[j] < array[minValueIndex]) {
        minValueIndex = j;
      }
    }

    [array[i], array[minValueIndex]] = [array[minValueIndex], array[i]];
  }

  return array;
};

const sorterArray = selectionSort(unsortedArray);

console.log(sorterArray);
