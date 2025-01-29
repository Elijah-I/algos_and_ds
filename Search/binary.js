const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const binarySearch = (array, item, offset = 0) => {
  let middle = Math.ceil(array.length / 2);
  let left = array.slice(0, middle);
  let right = array.slice(middle);

  if (array[middle] === item) {
    return middle + offset;
  }

  if (array[middle] < item) {
    return binarySearch(right, item, left.length);
  }

  if (array[middle] > item) {
    return binarySearch(left, item, offset);
  }
};

const index = binarySearch(sortedArray, 3);

console.log(index, sortedArray[index]);
