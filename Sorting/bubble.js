const unsortedArray = [10, 5, 2, 3, 0, -1, 11];

const bubbleSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 1; j < array.length; j++) {
      if (array[j] < array[j - 1]) {
        [array[j], array[j - 1]] = [array[j - 1], array[j]];
      }
    }
  }

  return array;
};

const sorterArray = bubbleSort(unsortedArray);

console.log(sorterArray);
