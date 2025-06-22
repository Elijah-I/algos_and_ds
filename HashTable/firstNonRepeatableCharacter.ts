/**
 * Название: First Non-Repeating Character
 * Условие: Дано строка. Нужно найти и вернуть первый символ, который встречается в строке только один раз.
 *         Если такого символа нет — вернуть undefined.
 * Пример:
 *   Ввод: "a green apple"
 *   Вывод: "g"
 */

const str = 'a green apple';

const firstNonRepeatableCharacter = (str: string) => {
  const charTable: Record<string, number> = {};

  for (const char of str) {
    if (char === ' ') continue;
    charTable[char] ??= 0;
    charTable[char]++;
  }

  return Object.keys(charTable).find((char) => charTable[char] === 1);
};

const char = firstNonRepeatableCharacter(str);
console.log(char);
