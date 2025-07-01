const arr = [2, 7, 5, 6, 8, 3, 4, 1, 9];

/**
 * Сортирует массив методом слияния.
 *
 * @algorithm
 * Рекурсивно делим массив на две половины, пока не останутся отдельные элементы.
 * Затем объединяем (сливаем) эти части в отсортированном порядке.
 * Слияние двух отсортированных массивов производится сравнением их головных элементов.
 *
 * @complexity O(n log n) — линейно-логарифмическая сложность
 * @param {number[]} arr - исходный массив чисел
 * @returns {number[]} отсортированный массив
 */
const mergeSort = (array: typeof arr): typeof arr => {
  if (array.length < 2) return array;

  const pivot = Math.floor(array.length / 2);
  const leftSubArray = array.slice(0, pivot);
  const rightSubArray = array.slice(pivot);

  const merge = (left: typeof arr, right: typeof arr) => {
    let leftPointer = 0;
    let rightPointer = 0;
    const result = [];

    while (leftPointer < left.length || rightPointer < right.length) {
      if (left[leftPointer] < right[rightPointer] || rightPointer === right.length) {
        result.push(left[leftPointer]);
        leftPointer++;
        continue;
      }

      if (right[rightPointer] < left[leftPointer] || leftPointer === left.length) {
        result.push(right[rightPointer]);
        rightPointer++;
        continue;
      }
    }

    return result;
  };

  return merge(mergeSort(leftSubArray), mergeSort(rightSubArray));
};

const sorted = mergeSort(arr);

console.log(sorted);
