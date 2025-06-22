/**
 * Название: Graph Traversal and Operations
 * Условие: Реализовать класс графа с возможностью добавления и удаления вершин и рёбер,
 *         выполнения обхода в глубину (DFS), проверки наличия циклов (циклов),
 *         а также топологической сортировки для направленного ациклического графа.
 * Пример:
 *   Добавлены узлы A, B, C, D и рёбра между ними.
 *   При вызове hasCycle() должен быть найден цикл, например: "C-B-A-C".
 */

import { LinkedList } from '../LinkedList/baseClass';

class Node {
  label: string;
}

class Graph {
  size: number = 0;
  graph: LinkedList[] = [];
  indexedDB: Record<Node['label'], number> = {};
  visited: Record<Node['label'], boolean> = {};
  visiting: Record<Node['label'], boolean> = {};
  parents: Record<Node['label'], Node['label'] | null> = {};

  private getNodeList(label: Node['label']) {
    return this.indexedDB[label] !== undefined ? this.graph[this.indexedDB[label]] : null;
  }

  private getNodeIndex(label: Node['label']) {
    return this.indexedDB[label];
  }

  private isNodeExists(label: Node['label']) {
    return this.indexedDB[label] !== undefined;
  }

  private isConnected(list: LinkedList, label: Node['label']) {
    return list.indexOf(label) !== -1;
  }

  public addNode(label: Node['label']) {
    if (this.isNodeExists(label)) {
      return;
    }

    this.graph[this.size] = new LinkedList();
    this.indexedDB[label] = this.size;

    this.size++;
  }

  public removeNode(label: Node['label']) {
    if (this.isNodeExists(label)) {
      this.graph.splice(this.getNodeIndex(label), 1);

      delete this.indexedDB[label];
      this.size--;
    }
  }

  public addEdge(from: Node['label'], to: Node['label']) {
    const list = this.getNodeList(from);

    if (!this.isNodeExists(from) || !this.isNodeExists(to)) {
      return;
    }

    if (!this.isConnected(list, to)) {
      list.addLast(to);
    }
  }

  public removeEdge(from: Node['label'], to: Node['label']) {
    const list = this.getNodeList(from);

    if (!this.isNodeExists(from) || !this.isNodeExists(to)) {
      return;
    }

    if (this.isConnected(list, to)) {
      list.delete(list.indexOf(to));
    }
  }

  public depthTraversal(from: Node['label']) {
    this.visited = {};
    return this.depthTraversalRecursive(from);
  }

  private depthTraversalRecursive(from: Node['label']): Node['label'][] {
    if (this.visited[from]) return [];

    this.visited[from] = true;
    const result: string[] = [from];
    const list = this.getNodeList(from);

    if (list) {
      let pointer = list.getRoot();

      while (pointer) {
        result.push(...this.depthTraversalRecursive(`${pointer.value}`));
        pointer = list.getNextNode(pointer);
      }
    }

    return result;
  }

  public topologicalSort(from: Node['label']): Node['label'][] {
    if (this.visited[from]) return [];

    const stack: Node['label'][] = [];
    this.visited[from] = true;

    const list = this.getNodeList(from);

    if (list) {
      let pointer = list.getRoot();

      while (pointer) {
        if (pointer) {
          stack.unshift(...this.topologicalSort(`${pointer.value}`));
        }

        pointer = list.getNextNode(pointer);
      }

      stack.unshift(from);
    }

    return stack;
  }

  public hasCycle(from?: Node['label']): string {
    let cycle = '';
    if (this.visited[from]) return cycle;

    if (!from) {
      from = Object.keys(this.indexedDB)[0];
      this.parents[from] = null;
    }

    this.visiting[from] = true;
    const list = this.getNodeList(from);

    if (list) {
      let pointer = list.getRoot();

      while (pointer) {
        const to = pointer.value;

        if (this.visiting[to]) {
          let totalCycle = [to];
          let current = from;
          while (current) {
            totalCycle.push(current);
            current = this.parents[current];
          }
          return totalCycle.join('-');
        }
        this.parents[to] = from;
        this.visiting[to] = true;
        cycle = this.hasCycle(`${to}`);
        pointer = list.getNextNode(pointer);
      }

      this.visiting[from] = false;
      this.visited[from] = true;
    }

    return cycle;
  }

  public print() {
    this.graph.forEach((list, index) => {
      console.log(Object.keys(this.indexedDB)[index], 'is connected with', list.toArray());
    });
  }
}

const graph = new Graph();

graph.addNode('A');
graph.addNode('B');
graph.addNode('C');
graph.addNode('D');

graph.addEdge('A', 'B');
graph.addEdge('B', 'C');
graph.addEdge('C', 'A');
graph.addEdge('D', 'A');

const cycle = graph.hasCycle();
console.log(cycle);

// graph.addNode('X');
// graph.addNode('A');
// graph.addNode('B');
// graph.addNode('P');

// graph.addEdge('X', 'A');
// graph.addEdge('X', 'B');
// graph.addEdge('A', 'P');
// graph.addEdge('B', 'P');

// const sort = graph.topologicalSort('X');
// console.log(sort);

// graph.addNode('A');
// graph.addNode('B');
// graph.addNode('C');
// graph.addNode('D');

// graph.addEdge('A', 'B');
// graph.addEdge('A', 'C');
// graph.addEdge('B', 'D');
// graph.addEdge('D', 'C');

// const path = graph.depthTraversal('A');
// console.log(path);

// graph.print();

export {};
