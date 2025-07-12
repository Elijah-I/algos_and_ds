const arr = [6, 2, 5, 4, 3, 7];

/**
 * Выполняет линейный поиск элемента в массиве.
 *
 * @algorithm
 ** Проходим по каждому элементу массива.
 ** Если элемент совпадает с искомым — возвращаем его индекс.
 ** Если не найден — возвращаем -1.
 *
 * @complexity O(n) — линейная сложность
 * @param {number[]} array - исходный массив чисел
 * @param {number} find - искомое значение
 * @returns {number} индекс найденного элемента или -1, если не найден
 */
const linearSearch = (array: typeof arr, find: (typeof arr)[number]): number => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === find) {
      return i;
    }
  }

  return -1;
};

const findExist = linearSearch(arr, 2);
console.log(findExist);

const findUnEexist = linearSearch(arr, 1);
console.log(findUnEexist);
