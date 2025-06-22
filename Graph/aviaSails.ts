/**
 * Название: Find Composite Flight Path
 * Условие: Дан список доступных авиарейсов в виде массива пар [откуда, куда].
 *         Нужно найти цепочку перелетов из заданного пункта вылета в пункт назначения.
 *         Гарантируется, что путь либо единственный, либо его нет.
 * Пример:
 *   Ввод: flights = [
 *         ['A', 'B'],
 *         ['A', 'C'],
 *         ['A', 'D'],
 *         ['A', 'O'],
 *         ['D', 'K'],
 *         ['D', 'L'],
 *         ['D', 'M'],
 *         ['D', 'N'],
 *         ['M', 'Q'],
 *         ['M', 'Z'],
 *         ['O', 'P'],
 *         ['L', 'G'],
 *         ['L', 'F'],
 *         ['F', 'Y']
 *       ]
 *   Вызов: findPath('A', 'N')
 *   Вывод: ['A', 'D', 'N']
 */

const flights = [
  ['A', 'B'],
  ['A', 'C'],
  ['A', 'D'],
  ['A', 'O'],
  ['D', 'K'],
  ['D', 'L'],
  ['D', 'M'],
  ['D', 'N'],
  ['M', 'Q'],
  ['M', 'Z'],
  ['O', 'P'],
  ['L', 'G'],
  ['L', 'F'],
  ['F', 'Y'],
];

const findPath = (from: string, to: string): string[] => {
  const path: string[] = [];
  const pointsTo = flights.filter((flight) => flight[0] === from).map((flight) => flight[1]);

  if (pointsTo.includes(to)) {
    return [from, to];
  }

  pointsTo.forEach((nextPoint) => {
    const nextNodes = findPath(nextPoint, to);
    if (nextNodes.length) path.push(from, ...nextNodes);
  });

  return path;
};

console.log(findPath('A', 'N')); // ['A', 'D', 'N']
console.log(findPath('A', 'Q')); // [("A", "D", "M", "Q")];
console.log(findPath('A', 'W')); // []
