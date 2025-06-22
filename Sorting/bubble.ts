const arr = [2, 7, 5, 6, 8, 3, 4, 1, 9];

/**
 * Сортирует массив методом пузырька.
 *
 * @algorithm
 ** Проходим по массиву, сравнивая соседние элементы.
 ** Если текущий элемент больше следующего — меняем их местами.
 ** Повторяем шаги до тех пор, пока массив не будет отсортирован.
 *
 * После каждого прохода наибольший элемент "всплывает" в конец,
 * поэтому длина проверяемой части массива уменьшается.
 *
 * @complexity O(n²) — квадратичная сложность
 * @param {number[]} arr - исходный массив чисел
 * @returns {number[]} отсортированный массив
 */
const bubbleSort = (array: typeof arr) => {
  for (let step = 0; step < array.length; step++) {
    for (let i = 0; i < array.length - step - 1; i++) {
      if (array[i] > array[i + 1]) {
        [array[i], array[i + 1]] = [array[i + 1], array[i]];
      }
    }
  }

  return array;
};

const sorted = bubbleSort(arr);

console.log(sorted);
