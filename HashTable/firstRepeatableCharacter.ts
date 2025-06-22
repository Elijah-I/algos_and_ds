/**
 * Название: First Repeating Character
 * Условие: Дано строка. Нужно найти и вернуть первый символ, который встречается в строке более одного раза.
 *         Если такого символа нет — вернуть null.
 * Пример:
 *   Ввод: "green apple"
 *   Вывод: "e"
 */

const str = 'green apple';

const firstRepeatableCharacter = (str: string) => {
  const chars = new Map();

  for (const char of str) {
    if (chars.has(char)) {
      return char;
    }

    chars.set(char, true);
  }

  return null;
};

const first = firstRepeatableCharacter(str);

console.log(first);
