/**
 * Название: Sum of Nested Array Elements
 * Условие: Дан массив, содержащий числа и вложенные массивы.
 *         Нужно рекурсивно (или с использованием стека) посчитать сумму всех чисел во всех уровнях вложенности.
 * Пример:
 *   Ввод: [1, [2, [3, 4], 5], 6]
 *   Вывод: 21
 */

const data = [1, [2, [3, 4], 5], 6];

const arraySum = (arr: typeof data) => {
  let sum = 0;
  const stack = [...arr];

  while (stack.length) {
    const current = stack.pop();

    if (typeof current === 'number') sum += current;
    else stack.push(...current);
  }

  return sum;
};

const result = arraySum(data);

console.log(result);
