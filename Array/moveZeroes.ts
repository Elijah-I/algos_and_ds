/**
 * Название: Move Zeroes
 * Условие: Дан массив целых чисел. Нужно переместить все нули в конец массива,
 *         сохраняя порядок ненулевых элементов. Операция должна выполняться in-place.
 * Пример:
 *   Ввод: [0, 0, 1, 0, 3, 12]
 *   Вывод: [1, 3, 12, 0, 0, 0]
 */

const numbers = [0, 0, 1, 0, 3, 12];

const moveZeroes = (numbers: number[]): number[] => {
  let stopPosition = 0;

  for (let i = 0; i < numbers.length; i++) {
    const stopIndex = numbers.length - stopPosition - 1;

    if (i >= stopIndex) {
      return numbers;
    }

    if (numbers[i] === 0) {
      stopPosition++;

      for (let j = i + 1; j <= stopIndex; j++) {
        numbers[j - 1] = numbers[j];
      }

      numbers[stopIndex] = 0;

      if (numbers[i] === 0) {
        i--;
      }
    }
  }

  return numbers;
};

const moved = moveZeroes(numbers);

console.log(moved);
