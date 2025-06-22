/**
 * Название: Find Numbers with Even Number of Digits
 * Условие: Дан массив целых положительных чисел. Нужно определить, сколько в нём элементов с чётным количеством цифр.
 * Пример:
 *   Ввод: [12, 345, 2, 6, 7896]
 *   Вывод: 2 (числа 12 и 7896 имеют чётное количество цифр)
 */

const numbers = [12, 345, 2, 6, 7896];

const findNumbers = (numbers: number[]): number => {
  return numbers.reduce((total, number) => (String(number).length % 2 ? total : ++total), 0);
};

const found = findNumbers(numbers);

console.log(found);
