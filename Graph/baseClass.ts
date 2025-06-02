import { LinkedList } from '../LinkedList/baseClass';

class Node {
  label: string;
}

class Graph {
  graph: LinkedList[] = [];
  indexedDB: Record<Node['label'], number> = {};
  size: number = 0;

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

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.removeEdge('A', 'C');

graph.addEdge('B', 'C');

// graph.removeNode('B');

graph.print();

export {};
