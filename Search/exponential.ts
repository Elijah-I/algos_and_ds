const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/**
 * Выполняет экспоненциальный поиск элемента в отсортированном массиве.
 *
 * @algorithm
 ** 1. Проверяем первый элемент, если он равен искомому — возвращаем индекс 0.
 ** 2. Увеличиваем индекс в степени двойки (1, 2, 4, 8, ...) пока не выйдем за границы массива или не превысим искомое значение.
 ** 3. Выполняем бинарный поиск в найденном диапазоне.
 *
 * @complexity O(log i), где i — позиция искомого элемента
 * @param {number[]} array - отсортированный массив чисел
 * @param {number} find - искомое значение
 * @returns {number} индекс найденного элемента или -1, если не найден
 */
const exponentialSearch = (array: typeof arr, find: (typeof arr)[number]): number => {
  if (array[0] === find) return 0;

  let bound = 1;
  while (bound < array.length - 1) {
    bound = Math.min(bound * 2, array.length - 1);

    if (find === array[bound]) return bound;

    if (find < array[bound]) {
      let pointerLeft = 0;
      let pointerRight = bound;

      while (pointerRight > pointerLeft) {
        const middle = Math.floor((pointerLeft + pointerRight) / 2);

        if (array[middle] === find) return middle;

        if (find < array[middle]) pointerRight = middle - 1;
        else pointerLeft = middle + 1;
      }

      return -1;
    }
  }

  return -1;
};

const findFirst = exponentialSearch(arr, 1);
console.log(findFirst);

const findLast = exponentialSearch(arr, 10);
console.log(findLast);

const findRandom = exponentialSearch(arr, 2);
console.log(findRandom);

export {};
