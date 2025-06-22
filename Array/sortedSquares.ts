/**
 * Название: Squares of a Sorted Array
 * Условие: Дан массив целых чисел, отсортированный в неубывающем порядке.
 *         Нужно вернуть массив квадратов каждого элемента, также отсортированный в неубывающем порядке.
 * Пример:
 *   Ввод: [-7, -3, 2, 3, 11]
 *   Вывод: [4, 9, 9, 49, 121]
 */

const numbers = [-7, -3, 2, 3, 11];

const sortedSquares = (numbers: number[]): number[] =>
  numbers.map((number) => number * number).sort((a, b) => a - b);

const sorted = sortedSquares(numbers);

console.log(sorted);
