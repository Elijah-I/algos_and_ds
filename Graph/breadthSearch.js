const graph = {};
graph.a = ["b", "c"];
graph.b = ["f"];
graph.c = ["d", "e"];
graph.d = ["f"];
graph.e = ["f", "x"];
graph.x = ["g"];
graph.f = ["g"];

const isBreadthSearch = (graph, start, end) => {
  const queue = [];
  queue.push(start);

  while (queue.length) {
    const current = graph[queue.shift()];

    if (!current) {
      continue;
    }

    if (current.includes(end)) {
      return true;
    }

    queue.push(...current);
  }

  return false;
};

const breadthSearch = (graph, current, end, prefix = "", paths = [[]]) => {
  if (current === end) {
    paths[paths.length - 1] = (prefix + current).split("");
    paths.push([]);

    return;
  }

  if (!graph[current]) {
    return;
  }

  for (let i = 0; i < graph[current].length; i++) {
    breadthSearch(graph, graph[current][i], end, prefix + current, paths);
  }

  return paths.slice(0, paths.length - 1);
};

const shortestPath = breadthSearch(graph, "a", "g");

console.log(shortestPath);
