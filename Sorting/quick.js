const unsortedArray = [10, 5, 2, 3, 0, -1, 11];

const quickSort = (array) => {
  if (array.length <= 1) {
    return array;
  }

  const less = [];
  const more = [];
  const middleElement = array[Math.floor(array.length / 2)];

  for (let i = 0; i < array.length; i++) {
    if (array[i] < middleElement) {
      less.push(array[i]);
    }

    if (array[i] > middleElement) {
      more.push(array[i]);
    }
  }

  return [...quickSort(less), middleElement, ...quickSort(more)];
};

const sorterArray = quickSort(unsortedArray);

console.log(sorterArray);
