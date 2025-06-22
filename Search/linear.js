/**
 * Название: Linear Search
 * Условие: Реализовать алгоритм линейного поиска элемента в массиве.
 *         Вернуть индекс первого найденного элемента или undefined, если элемент не найден.
 * Пример:
 *   Ввод: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], ищем 7
 *   Вывод: 6
 */

const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const linearSearch = (array, item) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === item) {
      return i;
    }
  }
};

const index = linearSearch(sortedArray, 7);

console.log(index, sortedArray[index]);
