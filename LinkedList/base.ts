/**
 * Название: Linked List Implementation
 * Условие: Реализовать односвязный список с базовыми операциями:
 *         - добавление элемента в конец (add)
 *         - поиск узла по значению (find)
 *         - вставка элемента после указанного узла (insert)
 *         - удаление элемента по значению (delete)
 * Пример:
 *   Ввод: add(0), add(1), add(3), insert(2, after 1), delete(2)
 *   Вывод после операций: { value: 0, next: { value: 1, next: { value: 3, next: null } } }
 */

type Value = number | null;
type Next = Node | null;

abstract class AbstractLinkedList {
  abstract entry: Node;
  abstract add(value: Value): Node;
  abstract find(value: Value): Node;
  abstract insert(value: Value, after: Node): never | Node;
  abstract delete(value: Value): Node;
}

abstract class AbstractNode {
  abstract value: Value;
  abstract next: Next;
}

class LinkedList implements AbstractLinkedList {
  entry: Node;
  private lastNode: Node;

  constructor() {
    this.entry = null;
    this.lastNode = this.entry;
  }

  add(value: Value): Node {
    if (!this.entry) {
      this.entry = new Node(value);
      this.lastNode = this.entry;
      return this.entry;
    }

    this.lastNode.next = new Node(value);
    this.lastNode = this.lastNode.next;
    return this.lastNode;
  }

  find(value: Value): Node {
    return this.findWithPrevious(value)[0];
  }

  private findWithPrevious(value: Value): [Node, Node] {
    let pointer = this.entry;
    let previousPointer = null;

    while (pointer) {
      if (pointer.value === value) {
        return [pointer, previousPointer];
      }
      previousPointer = pointer;
      pointer = pointer.next;
    }

    return [null, null];
  }

  insert(value: Value, after: Node): never | Node {
    if (!after) {
      throw new Error(`"after" should be a Node: "${after}" given`);
    }

    const afterNode = this.find(after.value);
    if (!afterNode) {
      throw new Error(`cant find node: ${after}`);
    }
    afterNode.next = new Node(value, afterNode.next);

    return afterNode;
  }

  delete(value: Value): Node {
    const [removeNode, previousNode] = this.findWithPrevious(value);
    previousNode.next = removeNode.next;

    return removeNode;
  }
}

class Node implements AbstractNode {
  value: Value;
  next: Next;

  constructor(value: Value = null, next: Next = null) {
    this.value = value;
    this.next = next;
  }
}

const list = new LinkedList();

list.add(0);
list.add(1);
list.add(3);
console.log('BASE:', list.entry);

list.insert(2, list.find(1));
console.log('INSERTED:', list.entry);

list.delete(2);
console.log('DELETED:', list.entry);
