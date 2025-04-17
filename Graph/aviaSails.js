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

const findPath = (from, to) => {
  let path = '';
  let skip = 0;
  let startFrom = from;
  const queue = [];

  for (let pointer = 0; pointer < flights.length; pointer++) {
    let node = flights[pointer];

    if (node[0] === startFrom) {
      if (!path.endsWith(startFrom)) {
        path += startFrom;
      }
      queue.push(node);
      skip++;
      continue;
    }

    if (queue.length) {
      node = queue.pop();
      startFrom = node[1];
      pointer = skip;

      if (node[0] === from) {
        path = from;
      }

      if (node[1] === to) {
        return (path + to).split('');
      }
    }
  }

  return [];
};

console.log(findPath('A', 'N')); // ['A', 'D', 'N']
console.log(findPath('A', 'Q')); // [("A", "D", "M", "Q")];
console.log(findPath('A', 'W')); // []
