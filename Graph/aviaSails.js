// Написать поиск составных авиабилетов
// Необходимо написать функцию, которая найдет любую цепочку перелетов из пункта вылета в пункт назначения.
// Функция принимает на вход пункт вылета, пункт назначения.
// Функция должна вернуть массив из всех остановок. Например [’A’, ’B’, ’C’].
// Гарантируется, что составной авиабилет или отсутствует или единственно возможный (нет ромбовидных перелетов).

const flights = [
  ["A", "B"],
  ["A", "С"],
  ["A", "D"],
  ["A", "O"],
  ["D", "K"],
  ["D", "L"],
  ["D", "M"],
  ["D", "N"],
  ["M", "Q"],
  ["M", "Z"],
  ["O", "P"],
  ["L", "G"],
  ["L", "F"],
  ["F", "Y"]
];

const findPath = (from, to) => {
  let path = [];
  const containsFrom = getStartsFrom(from);

  function getStartsFrom(startFrom) {
    const containsFrom = [];

    for (const key in flights) {
      if (flights[key][0] === startFrom) {
        containsFrom.push(flights[key]);
      }
    }

    return containsFrom;
  }

  if (!containsFrom.length) {
    return [];
  }

  const queue = [containsFrom.pop()];

  while (queue.length) {
    const node = queue.pop();

    if (node[1] === to) {
      path.push(node[0], to);
      return path;
    }

    const nextNodes = getStartsFrom(node[1]);

    if (nextNodes.length) {
      path.push(node[0]);
      queue.push(...nextNodes);
    }

    if (!queue.length && containsFrom.length) {
      path = [];
      queue.push(containsFrom.pop());
    }
  }

  return path;
};

console.log(findPath("A", "N")); // ['A', 'D', 'N']
console.log(findPath("A", "Q")); // ["A", "D", "M", "Q"]
console.log(findPath("A", "W")); // []
