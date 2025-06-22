/**
 * Название: Duplicate Zeros In Array
 * Условие: Дан массив целых чисел. Нужно продублировать все нули в массиве,
 *         сдвигая остальные элементы вправо. Изменения должны происходить in-place.
 * Пример:
 *   Ввод: [1, 0, 2, 3, 0, 4, 5, 0]
 *   Вывод: [1, 0, 0, 2, 3, 0, 0, 4]
 */

const arr = [1, 0, 2, 3, 0, 4, 5, 0];

const duplicateZeros = (arr: number[]): number[] => {
  let pointer = 0;

  while (pointer <= arr.length) {
    let subPointer = arr.length - 1;

    if (arr[pointer] === 0) {
      while (subPointer > pointer) {
        arr[subPointer] = arr[subPointer - 1];
        subPointer--;
      }

      pointer++;
    }

    pointer++;
  }

  return arr;
};

const duplicated = duplicateZeros(arr);

console.log(duplicated);
