/**
 * Название: Minimum Average of Smallest and Largest Elements
 * Условие: Дан массив целых чисел. Нужно последовательно брать пары из начала и конца массива,
 *         находить их среднее значение и определить минимальное среди всех таких средних.
 * Пример:
 *   Ввод: [1, 9, 8, 3, 10, 5]
 *   Вывод: 3 (минимальное среднее среди пар: (1,5), (9,10), (8,3))
 */

const numbers = [1, 9, 8, 3, 10, 5];

const minimumAverage = (numbers: number[]): number => {
  let min = 0;
  const sortedNumbers = numbers.sort((a, b) => a - b);

  while (sortedNumbers.length) {
    const average = (sortedNumbers.shift() + sortedNumbers.pop()) / 2;

    if (!min || average < min) {
      min = average;
    }
  }

  return min;
};

const min = minimumAverage(numbers);

console.log(min);
