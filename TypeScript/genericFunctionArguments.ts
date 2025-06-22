/**
 * Название: Generic Map Function
 * Условие: Реализовать универсальную функцию `mapArray`, которая работает с любым типом элементов массива
 *         и применяет к ним преобразующую функцию, возвращая новый массив.
 * Пример:
 *   Ввод: [1, 1, 2, 3, 5], функция преобразования num => `${num}`
 *   Вывод: ["1", "1", "2", "3", "5"]
 */

const numbers = [1, 1, 2, 3, 5];

const mapArray = <Item, Return>(arr: Item[], fn: (item: Item) => Return): Return[] => arr.map(fn);

const numbersToStrings = mapArray(numbers, (num) => `${num}`);
