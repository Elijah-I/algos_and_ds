const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/**
 * Выполняет бинарный поиск элемента в отсортированном массиве.
 *
 * @algorithm
 ** Устанавливаем два указателя: левый и правый конец массива.
 ** Пока левый указатель не превысил правый:
 **   - Находим середину массива.
 **   - Если элемент в середине равен искомому — возвращаем его индекс.
 **   - Если элемент в середине больше искомого — сдвигаем правый указатель влево.
 **   - Если элемент в середине меньше искомого — сдвигаем левый указатель вправо.
 ** Если не найден — возвращаем -1.
 *
 * @complexity O(log n) — логарифмическая сложность
 * @param {number[]} array - отсортированный массив чисел
 * @param {number} find - искомое значение
 * @returns {number} индекс найденного элемента или -1, если не найден
 */
const binarySearch = (array: typeof arr, find: (typeof arr)[number]): number => {
  if (!array.length) return -1;

  let leftPointer = 0;
  let rightPointer = array.length - 1;

  while (leftPointer <= rightPointer) {
    const pivotIndex = Math.floor((rightPointer + leftPointer) / 2);

    if (array[pivotIndex] === find) return pivotIndex;

    if (array[pivotIndex] < find) leftPointer = pivotIndex + 1;
    else rightPointer = pivotIndex - 1;
  }

  return -1;
};

const findFirst = binarySearch(arr, 1);
console.log(findFirst);

const findLast = binarySearch(arr, 10);
console.log(findLast);

const findRandom = binarySearch(arr, 2);
console.log(findRandom);

export {};
