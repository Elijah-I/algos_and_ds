const arr = [2, 7, 5, 6, 8, 3, 4, 1, 9];

/**
 * Сортирует массив методом вставки.
 *
 * @algorithm
 ** Массив условно делится на 2 части: отсортированный / не отсортированный
 ** Берем следующий несортированный элемент
 ** Проходим по отсортированной части справа налево и проверяем на каком индексе будет элемент который меньше текущего
 ** Смещаем все элементы отсортированной части от этого индекса вправо
 ** Вставляем текущий элемент в эту позицию
 *
 * После каждого прохода текущий элемент перемещается в нужно место массива
 *
 * @complexity O(n²) — квадратичная сложность
 * @param {number[]} arr - исходный массив чисел
 * @returns {number[]} отсортированный массив
 */
const insertionSort = (array: typeof arr) => {
  const rightShift = (array: typeof arr, sortedIndex: number, position: number) => {
    for (let index = sortedIndex; index > position; index--) {
      array[index] = array[index - 1];
    }
  };

  for (let nextIndex = 1; nextIndex < array.length; nextIndex++) {
    let shiftPosition = 0;
    const current = array[nextIndex];

    for (let sortedIndex = nextIndex; sortedIndex >= 0; sortedIndex--) {
      const sorted = array[sortedIndex];

      if (sorted < current) {
        shiftPosition = sortedIndex + 1;
        break;
      }
    }

    rightShift(array, nextIndex, shiftPosition);
    array[shiftPosition] = current;
  }

  return array;
};

const sorted = insertionSort(arr);

console.log(sorted);

export {};
