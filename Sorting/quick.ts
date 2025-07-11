const arr = [2, 7, 5, 6, 8, 3, 4, 1, 9];

/**
 * Сортирует массив методом быстрой сортировки.
 *
 * @algorithm
 ** Выбираем опорный элемент (pivot).
 ** Делим массив на две части: элементы меньше и больше опорного.
 ** Рекурсивно сортируем обе части.
 ** Объединяем отсортированные части и опорный элемент.
 *
 * @complexity O(n log n) — средняя сложность, O(n^2) — худший случай
 * @param {number[]} arr - исходный массив чисел
 * @returns {number[]} отсортированный массив
 */
const quickSort = (array: typeof arr, from = 0, to = array.length - 1): typeof arr => {
  if (to < 0 || from >= to) return array;

  const start = from;
  for (let i = start; i <= to; i++) {
    if (array[i] < array[to]) {
      [array[from], array[i]] = [array[i], array[from]];
      from++;
    }
  }

  [array[from], array[to]] = [array[to], array[from]];

  quickSort(array, start, from - 1);
  quickSort(array, from + 1, to);

  return array;
};

const sorted = quickSort(arr);

console.log(sorted);
