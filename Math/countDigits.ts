/**
 * Название: Count Digits That Divide the Number
 * Условие: Дано целое число num. Нужно посчитать, сколько его цифр (не равных нулю) делят это число без остатка.
 * Пример:
 *   Ввод: num = 1248
 *   Вывод: 4 (все цифры 1, 2, 4, 8 делят 1248)
 */

const countDigits = (num: number): number =>
  String(num)
    .split('')
    .reduce((total, digit) => (total += Number(num % Number(digit) === 0)), 0);

const total = countDigits(1248);

console.log(total);
