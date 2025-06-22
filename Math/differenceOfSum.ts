/**
 * Название: Difference Between Element Sum and Digit Sum
 * Условие: Дан массив целых чисел. Нужно посчитать разницу между суммой всех элементов
 *         и суммой всех отдельных цифр этих элементов.
 * Пример:
 *   Ввод: [1, 15, 6, 3]
 *   Вывод: 9 (сумма = 25, сумма цифр = 1+1+5+6+3 = 16, разница = 25-16 = 9)
 */

const numbers = [1, 15, 6, 3];

const differenceOfSum = (numbers: number[]): number => {
  let diff = 0;

  for (const key in numbers) {
    if (numbers[key] > 9) {
      diff += Math.abs(
        numbers[key] - Array.from(String(numbers[key])).reduce((a, b) => Number(a) + Number(b), 0),
      );
    }
  }

  return diff;
};

const diff = differenceOfSum(numbers);

console.log(diff);
