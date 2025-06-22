/**
 * Название: Merge Sorted Array
 * Условие: Даны два целочисленных массива numbers1 и numbers2, отсортированных по неубыванию.
 *         Массив numbers1 имеет достаточный размер для размещения всех элементов numbers2.
 *         Нужно объединить их в один отсортированный массив in-place (внутри numbers1).
 * Пример:
 *   Ввод: numbers1 = [-12, 0, 0, 0, 0, 0], m = 1
 *        numbers2 = [-49, 0, 0, 0, 48], n = 5
 *   Вывод: [-49, -12, 0, 0, 0, 0]
 */

const numbers1 = [-12, 0, 0, 0, 0, 0];
const m = 1;
const numbers2 = [-49, 0, 0, 0, 48];
const n = 5;

const mergeSortedArray = (
  numbers1: number[],
  m: number,
  numbers2: number[],
  n: number,
): number[] => {
  let pointer1 = 0;
  let pointer2 = 0;
  let total = [];

  while (true) {
    if (pointer1 >= m && pointer2 >= n) {
      break;
    }

    if (pointer1 >= m || numbers2[pointer2] <= numbers1[pointer1]) {
      total.push(numbers2[pointer2]);
      pointer2++;
      continue;
    }

    if (pointer2 >= n || numbers1[pointer1] <= numbers2[pointer2]) {
      total.push(numbers1[pointer1]);
      pointer1++;
      continue;
    }
  }

  total.forEach((value, key) => {
    numbers1[key] = value;
  });

  return numbers1;
};

const merged = mergeSortedArray(numbers1, m, numbers2, n);

console.log(merged);
