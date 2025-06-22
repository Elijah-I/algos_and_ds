/**
 * Название: Remove Duplicates from Sorted Array
 * Условие: Дан отсортированный массив целых чисел. Нужно удалить дубликаты таким образом,
 *         чтобы каждый элемент встречался только один раз. Операция должна выполняться in-place.
 *         Функция возвращает новую длину массива без дубликатов.
 * Пример:
 *   Ввод: [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
 *   Вывод: 5 (массив после обработки считается как [0, 1, 2, 3, 4, ...], остальные элементы игнорируются)
 */

const numbers = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

const removeDuplicates = (numbers: number[] | string[]): number => {
  let pointer = 0;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] !== numbers[i + 1]) {
      numbers[pointer] = numbers[i];
      pointer++;
    }
  }

  return pointer;
};

const clean = removeDuplicates(numbers);

console.log(clean);
