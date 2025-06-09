import { LinkedList } from '../LinkedList/baseClass';

class Node {
  label: string;
}

class Graph {
  size: number = 0;
  graph: LinkedList[] = [];
  indexedDB: Record<Node['label'], number> = {};
  visited: Record<Node['label'], boolean> = {};

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
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('D', 'C');

// graph.print();

const path = graph.depthTraversal('A');
console.log(path);

export {};
