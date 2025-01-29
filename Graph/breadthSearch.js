const graph = {};
graph.a = ["b", "c"];
graph.b = ["f"];
graph.c = ["d", "e"];
graph.d = ["f"];
graph.e = ["f"];
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

const breadthSearch = (graph, current, end, total = [], thread = 0) => {
  const passed = [];

  if (!graph[current] || current === end) {
    return;
  }

  while (passed.length !== graph[current].length) {
    const currentIndex = passed.length;
    const next = graph[current][currentIndex];

    if (!total[thread]) {
      let prefix = [current];
      const prevThread = total[thread - 1];

      if (prevThread) {
        const prefixIndex = prevThread.findIndex((value) => value === current);
        prefix = prevThread.slice(0, prefixIndex + 1);
      }

      total[thread] = prefix;
    }

    total[thread].push(next);

    passed.push(breadthSearch(graph, next, end, total, thread++));
  }

  return total.filter((thread) => end === thread[thread.length - 1]);
};

const shortestPath = breadthSearch(graph, "a", "g");

console.log(shortestPath);
