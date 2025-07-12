const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/**
 * Выполняет jump search (прыжковый поиск) элемента в отсортированном массиве.
 *
 * @algorithm
 ** 1. Выбирается оптимальный шаг jump (обычно sqrt(n)).
 ** 2. Перемещаемся по массиву с этим шагом, пока не превысим искомое значение или не достигнем конца.
 ** 3. После этого выполняем линейный поиск в найденном блоке.
 ** 4. Если элемент найден — возвращаем его индекс, иначе — -1.
 *
 * @complexity O(√n) — корневая сложность
 * @param {number[]} array - отсортированный массив чисел
 * @param {number} find - искомое значение
 * @returns {number} индекс найденного элемента или -1, если не найден
 */
const jumpSearch = (array: typeof arr, find: (typeof arr)[number]): number => {
  const jumpStep = Math.floor(Math.sqrt(array.length));

  let blockBeginPointer = 0;
  let blockEndPointer = jumpStep;

  while (blockEndPointer < array.length) {
    if (array[blockEndPointer] >= find) {
      for (let i = blockBeginPointer; i <= blockEndPointer; i++) {
        if (array[i] == find) return i;
      }
      return -1;
    }

    blockBeginPointer += jumpStep;
    blockEndPointer = Math.max(blockBeginPointer + jumpStep, array.length - 1);
  }

  return -1;
};

const findFirst = jumpSearch(arr, 1);
console.log(findFirst);

const findLast = jumpSearch(arr, 10);
console.log(findLast);

const findRandom = jumpSearch(arr, 2);
console.log(findRandom);

export {};
