// Написать поиск составных авиабилетов
// Необходимо написать функцию, которая найдет любую цепочку перелетов из пункта вылета в пункт назначения.
// Функция принимает на вход пункт вылета, пункт назначения.
// Функция должна вернуть массив из всех остановок. Например [’A’, ’B’, ’C’].
// Гарантируется, что составной авиабилет или отсутствует или единственно возможный (нет ромбовидных перелетов).

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
