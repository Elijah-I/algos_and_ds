/**
 * Название: Sort People by Their Heights
 * Условие: Даны два массива одинаковой длины: names и heights.
 *         Массив names содержит имена людей, а heights — их рост в произвольных единицах.
 *         Нужно вернуть список имён, отсортированный по значениям роста в убывающем порядке.
 * Пример:
 *   Ввод: names = ["6", "5", "7", "4", "2", "1", "3", "8"]
 *        heights = [17233, 32521, 14087, 42738, 46669, 65662, 43204, 8224]
 *   Вывод: ["1", "2", "5", "3", "4", "6", "7", "8"]
 */

const names = ['6', '5', '7', '4', '2', '1', '3', '8'];
const heights = [17233, 32521, 14087, 42738, 46669, 65662, 43204, 8224];

const sortPeople = (names: string[], heights: number[]): string[] =>
  names
    .map((name, order) => ({ name, height: heights[order] }))
    .sort((a, b) => b.height - a.height)
    .map(({ name }) => name);

const sortedPeople = sortPeople(names, heights);

console.log(sortedPeople);
