/**
 * Название: Decode the Message
 * Условие: Даны строка key и строка message.
 *         Строка key содержит буквы (без пробелов), из которых формируется шифр:
 *         каждая уникальная буква из key сопоставляется с соответствующей буквой алфавита.
 *         Используя это соответствие, нужно расшифровать сообщение message.
 * Пример:
 *   Ввод: key = "the quick brown fox jumps over the lazy dog", message = "vkbs bs t suepuv"
 *   Вывод: "this is a secret"
 */

const decodeMessage = (key: string, message: string): string => {
  const alphabet = Array.from('abcdefghijklmnopqrstuvwxyz');
  const uniqKeys = Array.from(new Set(key.replaceAll(' ', '')));

  return message
    .split('')
    .map((char) => (char === ' ' ? char : alphabet[uniqKeys.indexOf(char) || 0]))
    .join('');
};

const message = decodeMessage('the quick brown fox jumps over the lazy dog', 'vkbs bs t suepuv');

console.log(message);
