/**
 * Название: Reverse String Using Recursion
 * Условие: Дано строка. Нужно реализовать рекурсивную функцию, которая возвращает новую строку,
 *         символы которой расположены в обратном порядке.
 * Пример:
 *   Ввод: "abcde"
 *   Вывод: "edcba"
 */

const string = 'abcde';

const reverseString = (string: string): string => {
  if (!string) return '';

  const char = string[0];
  const rest = string.slice(1);

  return reverseString(rest) + char;
};

const reversed = reverseString(string);

console.log(reversed);
