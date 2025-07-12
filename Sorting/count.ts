const arr = [2, 5, 1, 5, 4, 4, 2, 5, 6];

/**
 * Сортировка подсчётом (Counting Sort)
 *
 * @algorithm
 * 1. Находим минимальное и максимальное значения в массиве.
 * 2. Создаём вспомогательный массив counts для хранения количества вхождений каждого числа.
 * 3. Заполняем массив counts: для каждого элемента исходного массива увеличиваем соответствующий счётчик.
 * 4. Формируем отсортированный массив, проходя по counts и добавляя элементы в результирующий массив согласно их количеству.
 *
 * @complexity
 * Временная сложность: O(n + k), где n — длина массива, k — диапазон значений (max - min + 1).
 * Пространственная сложность: O(k), где k — диапазон значений.
 *
 * @param {number[]} array - исходный массив чисел
 * @returns {number[]} отсортированный массив
 */
const countSort = (array: typeof arr): typeof arr => {
  const sorted: number[] = [];
  const indexed: number[] = [];

  for (let i = 0; i < array.length; i++) {
    indexed[array[i]] ??= 0;
    indexed[array[i]]++;
  }

  for (let i = 0; i < indexed.length; i++) {
    if (indexed[i]) sorted.push(...Array(indexed[i]).fill(i));
  }

  return sorted;
};

const sorted = countSort(arr);

console.log(sorted);
