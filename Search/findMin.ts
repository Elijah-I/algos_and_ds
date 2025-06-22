/**
 * Название: Find Minimum in Rotated Sorted Array
 * Условие: Дан массив целых чисел, отсортированный по возрастанию и затем повернутый.
 *         Нужно найти минимальный элемент в этом массиве за время O(log n).
 * Пример:
 *   Ввод: [2, 1]
 *   Вывод: 1
 *
 *   Ввод: [3, 4, 5, 1, 2]
 *   Вывод: 1
 */

const numbers = [2, 1];

const findMin = (numbers: number[]): number => {
  let start = 0;
  let end = numbers.length - 1;

  while (start !== end) {
    const pivot = Math.floor((start + end) / 2);

    if (numbers[pivot + 1] < numbers[pivot]) {
      if (numbers[pivot + 1] === undefined) {
        return numbers[pivot];
      }
      return numbers[pivot + 1];
    }

    if (numbers[pivot - 1] === undefined || numbers[pivot - 1] > numbers[pivot]) {
      return numbers[pivot];
    }

    if (numbers[pivot] < numbers[end]) {
      end = pivot;
    } else {
      start = pivot + 1;
    }
  }

  return numbers[0];
};

const min = findMin(numbers);

console.log(min);
