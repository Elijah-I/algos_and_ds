/**
 * Название: Dijkstra's Shortest Path Algorithm
 * Условие: Реализовать алгоритм Дейкстры для поиска кратчайшего пути во взвешенном графе.
 *         На вход подаётся начальная и конечная вершины. Нужно вернуть путь и длину кратчайшего пути.
 * Пример:
 *   Ввод: graph = {
 *         a: [{ value: 'b', weight: 2 }, { value: 'd', weight: 8 }],
 *         b: [{ value: 'd', weight: 5 }, { value: 'e', weight: 6 }],
 *         d: [{ value: 'e', weight: 3 }, { value: 'f', weight: 2 }],
 *         e: [{ value: 'f', weight: 1 }, { value: 'c', weight: 9 }],
 *         f: [{ value: 'c', weight: 3 }],
 *         c: []
 *       }
 *   Вызов: shortestPath('a', 'c')
 *   Вывод: { path: "a -> b -> d -> f -> c", distance: 13 }
 */

type NodeValue = string;

type Node = {
  value: NodeValue;
  weight: number;
};

type DatabaseItem = {
  shortestDistance: number;
  parentValue: Node['value'];
};
type Database = Record<string, DatabaseItem>;

const graph: Record<string, Node[]> = {};
graph.a = [
  { value: 'b', weight: 2 },
  { value: 'd', weight: 8 },
];
graph.b = [
  { value: 'd', weight: 5 },
  { value: 'e', weight: 6 },
];
graph.d = [
  { value: 'e', weight: 3 },
  { value: 'f', weight: 2 },
];
graph.e = [
  { value: 'f', weight: 1 },
  { value: 'c', weight: 9 },
];
graph.f = [{ value: 'c', weight: 3 }];
graph.c = [];

const shortestPath = (from: NodeValue, to: NodeValue) => {
  const unvisited = Object.keys(graph);
  const database: Database = {};

  unvisited.forEach((nodeValue) => {
    database[nodeValue] = {
      shortestDistance: nodeValue === from ? 0 : Infinity,
      parentValue: '',
    };
  });

  const traverse = (nodeValue: NodeValue) => {
    const distanceToNode =
      database[nodeValue].shortestDistance === Infinity ? 0 : database[nodeValue].shortestDistance;

    graph[nodeValue].forEach((childNode) => {
      const dbChild = database[childNode.value];
      if (!dbChild) return;

      const distanceToChild = distanceToNode + childNode.weight;

      if (distanceToChild < dbChild.shortestDistance) {
        dbChild.shortestDistance = distanceToChild;
        dbChild.parentValue = nodeValue;
      }
    });

    unvisited.splice(unvisited.indexOf(nodeValue), 1);
  };

  const getNextNodeValue = () => {
    let nextNodeValue = '';
    let minDistance = Infinity;

    unvisited.forEach((nodeValue) => {
      if (database[nodeValue].shortestDistance < minDistance) {
        minDistance = database[nodeValue].shortestDistance;
        nextNodeValue = nodeValue;
      }
    });

    return nextNodeValue;
  };

  while (unvisited.length) {
    const nextNodeValue = getNextNodeValue();
    traverse(nextNodeValue);
  }

  const path = [to];
  let distance = 0;
  let currentNode = database[to];

  while (currentNode.parentValue) {
    path.unshift(currentNode.parentValue);
    distance += currentNode.shortestDistance;

    currentNode = database[currentNode.parentValue];
  }

  return {
    path: path.join(' -> '),
    distance,
  };
};

console.log(shortestPath('a', 'c'));
