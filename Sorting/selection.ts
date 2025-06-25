const arr = [2, 7, 5, 6, 8, 3, 4, 1, 9];

/**
 * Сортирует массив методом выбора.
 *
 * @algorithm
 ** Проходим по массиву и находим минимальный элемент
 ** Меняем местами минимальный элемент и текущую позицию
 ** Переходим к следующей позиции
 ** Повторяем до конца массива
 *
 * После каждого прохода наименьший элемент перемещается к началу массива
 *
 * @complexity O(n²) — квадратичная сложность
 * @param {number[]} arr - исходный массив чисел
 * @returns {number[]} отсортированный массив
 */
const selectionSort = (array: typeof arr) => {
  for (let position = 0; position < array.length; position++) {
    let minIndex = position;

    for (let index = position + 1; index < array.length; index++) {
      if (array[index] < array[minIndex]) minIndex = index;
    }

    if (minIndex !== position)
      [array[position], array[minIndex]] = [array[minIndex], array[position]];
  }

  return array;
};

const sorted = selectionSort(arr);

console.log(sorted);

export {};
