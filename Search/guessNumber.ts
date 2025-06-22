/**
 * Название: Guess Number Higher or Lower
 * Условие: Ты играешь в игру угадайку. Загадано число от 1 до n.
 *         Каждый раз ты предполагаешь число, и тебе говорят,
 *         оно больше (возвращается -1), меньше (возвращается 1), или равно загаданному (возвращается 0).
 *         Нужно реализовать алгоритм, который за минимальное число попыток найдёт загаданное число.
 * Пример:
 *   Ввод: guessNumber(1000), и загадано 50
 *   Вывод: 50
 */

const guessed = 50;

const guess = (n: number) => {
  if (n === guessed) return 0;
  if (n > guessed) return -1;
  if (n < guessed) return 1;
};

const guessNumber = (n: number): number => {
  let start = 0;
  let end = n;

  while (start !== end) {
    const position = Math.ceil((start + end) / 2);

    if (guess(position) === 0) {
      return position;
    }

    if (guess(position) === -1) {
      end = position - 1;
    } else {
      start = position;
    }
  }

  return null;
};

const number = guessNumber(1000);

console.log(number);
