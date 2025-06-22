/**
 * Название: Reverse String Using Stack
 * Условие: Дано строка. Нужно реализовать функцию, которая возвращает новую строку,
 *         символы которой расположены в обратном порядке, используя структуру данных "стек".
 * Пример:
 *   Ввод: "abcd"
 *   Вывод: "dcba"
 */

const s = 'abcd';

const reverseString = (s: string) => {
  let reversedString = '';

  const stack = [];
  for (const char of s) {
    stack.push(char);
  }
  while (stack.length) {
    reversedString += stack.pop();
  }

  return reversedString;
};

const reversed = reverseString(s);

console.log(reversed);
