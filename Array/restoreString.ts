/**
 * Название: Shuffle String
 * Условие: Дано строка s и массив индексов такой же длины.
 *         Массив индексов указывает, на какую позицию в результирующей строке
 *         должен быть перемещён соответствующий символ исходной строки.
 *         Нужно восстановить строку в правильном порядке.
 * Пример:
 *   Ввод: s = "codeleet", indices = [4, 5, 6, 7, 0, 2, 1, 3]
 *   Вывод: "leetcode"
 */

const s = 'codeleet';
const indices = [4, 5, 6, 7, 0, 2, 1, 3];

const restoreString = (s: string, indices: number[]): string => {
  const result: string[] = [];

  Array.from(s).forEach((char, order) => {
    result[indices[order]] = char;
  });

  return result.join('');
};

const restoredString = restoreString(s, indices);

console.log(restoredString);
