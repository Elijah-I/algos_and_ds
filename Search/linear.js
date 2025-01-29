const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const linearSearch = (array, item) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === item) {
      return i;
    }
  }
};

const index = linearSearch(sortedArray, 7);

console.log(index, sortedArray[index]);
