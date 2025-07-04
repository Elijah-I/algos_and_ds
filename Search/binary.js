/**
 * Название: Binary Search Implementations
 * Условие: Реализовать три версии бинарного поиска в **отсортированном массиве**:
 *         1. Рекурсивная версия
 *         2. Итеративная версия с делением массива
 *         3. Версия с использованием указателей (без разрезания массива)
 * Пример:
 *   Ввод: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], ищем 7
 *   Вывод: 6 (индекс элемента 7 в массиве)
 */

const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const binarySearchRecursion = (array, item, offset = 0) => {
  const middle = Math.ceil(array.length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle);

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

const binarySearchCycle = (array, item) => {
  const recalculateSlices = () => {
    middle = Math.ceil(array.length / 2);
    left = array.slice(0, middle);
    right = array.slice(middle);
  };

  let offset = 0;
  let middle, left, right;

  recalculateSlices();

  while (array.length > 1) {
    if (array[middle] === item) {
      return middle + offset;
    }

    if (array[middle] < item) {
      offset += left.length;

      array = array.slice(middle);
      recalculateSlices();
    }

    if (array[middle] > item) {
      array = array.slice(0, middle);
      recalculateSlices();
    }
  }

  return null;
};

const binarySearchPointers = (array, item) => {
  let start = 0;
  let end = array.length;

  while (end - start) {
    const middle = Math.ceil((end + start) / 2);

    if (array[middle] === item) {
      return middle;
    }

    if (array[middle] < item) {
      start = middle;
    } else {
      end = middle;
    }
  }

  return null;
};

const index = binarySearchPointers(sortedArray, 7);

console.log(index, sortedArray[index]);
