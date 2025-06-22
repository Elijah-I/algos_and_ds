/**
 * Название: Remove Element
 * Условие: Дан массив целых чисел и значение val. Нужно удалить все вхождения val из массива in-place.
 *         Функция не должна использовать дополнительную память, результат должен быть записан в исходный массив.
 *         Возвращается новая длина массива после удаления элементов.
 * Пример:
 *   Ввод: [0, 1, 2, 2, 3, 0, 4, 2], val = 2
 *   Вывод: [0, 1, 3, 0, 4, '_', '_', '_']
 */

const numbers = [0, 1, 2, 2, 3, 0, 4, 2];
const val = 2;

const removeElement = (numbers: number[] | string[], val: number): number[] | string[] => {
  const lastIndex = numbers.length - 1;

  for (let position = 0; position <= lastIndex; position++) {
    if (numbers[position] === val) {
      for (let i = Number(position) + 1; i <= lastIndex; i++) {
        numbers[i - 1] = numbers[i];
        position--;
      }
      if (!Number.isNaN(numbers[lastIndex])) {
        numbers[lastIndex] = '_';
      }
    }
  }

  return numbers;
};

const cleanArray = removeElement(numbers, val);

console.log(cleanArray);
