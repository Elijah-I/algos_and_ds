/**
 * Название: Linked List with Advanced Operations
 * Условие: Реализовать односвязный список с поддержкой базовых и расширенных операций:
 *         - добавление в начало, конец и по индексу
 *         - удаление первого, последнего и по индексу
 *         - поиск по значению и индексу
 *         - реверс списка
 *         - получение K-го элемента с конца
 *         - преобразование в массив и вывод в консоль
 * Пример:
 *   Ввод: addLast(10), addLast(20), addFirst(5), add(2, 15)
 *   Вывод: [5, 10, 15, 20]
 */

type Value = string | number;

class Node {
  constructor(
    public value: Value,
    public next: Node | null = null,
  ) {}
}

export class LinkedList {
  private head: null | Node = null;
  private tail: null | Node = null;
  private size: number = 0;

  private getByIndex(index: number) {
    let position = 0;
    let pointer = this.head;
    let prevPointer = null;

    if (index < 0 || index > this.size) {
      throw new Error(`invalid index ${index}`);
    }

    while (pointer && position !== index) {
      prevPointer = pointer;
      pointer = pointer.next;

      position++;
    }

    return { pointer, prevPointer };
  }

  private handleAdd(value: Value, onAdd: () => void) {
    if (!this.head) {
      this.head = new Node(value);
      this.tail = this.head;
      return;
    }

    onAdd();
  }

  public getRoot() {
    return this.head;
  }

  public getNextNode(node?: Node) {
    if (!node) node = this.head;
    return node.next;
  }

  public reverse() {
    if (!this.head) {
      return;
    }

    let pointer = this.head;
    let prevPointer = null;

    while (pointer) [pointer.next, prevPointer, pointer] = [prevPointer, pointer, pointer.next];

    [this.head, this.tail] = [this.tail, this.head];
  }

  public contains(value: Value) {
    return this.indexOf(value) !== -1;
  }

  public indexOf(value: Value) {
    let position = 0;
    let pointer = this.head;

    while (pointer) {
      if (pointer.value === value) {
        return position;
      }

      pointer = pointer.next;
      position++;
    }

    return -1;
  }

  public delete(index: number) {
    const { pointer, prevPointer } = this.getByIndex(index);

    if (!prevPointer) {
      this.deleteFirst();
      return;
    }

    prevPointer.next = pointer.next;
    this.size--;

    if (index === this.size) {
      this.tail = prevPointer;
    }
  }

  public deleteFirst() {
    if (!this.head) {
      throw new Error('LinkedList is empty');
    }

    const prevHead = this.head;
    this.head = this.head.next;
    prevHead.next = null;

    this.size--;
  }

  public deleteLast() {
    if (!this.head) {
      throw new Error('LinkedList is empty');
    }

    const { prevPointer } = this.getByIndex(this.size - 1);
    this.tail = prevPointer;
    this.tail.next = null;

    this.size--;
  }

  public add(index: number, value: Value) {
    this.handleAdd(value, () => {
      const { prevPointer } = this.getByIndex(index);
      prevPointer.next = new Node(value, prevPointer.next);

      if (index === this.size) {
        this.tail = prevPointer.next;
      }
    });

    this.size++;
  }

  public addFirst(value: Value) {
    this.handleAdd(value, () => {
      const newNode = new Node(value, this.head);
      this.head = newNode;
    });

    this.size++;
  }

  public addLast(value: Value) {
    this.handleAdd(value, () => {
      this.tail.next = new Node(value);
      this.tail = this.tail.next;
    });

    this.size++;
  }

  public getKthFromTheEnd(k: number) {
    if (k < 0) {
      throw new Error('invalid K');
    }

    if (k === 0) {
      return this.tail;
    }

    if (k === this.size) {
      return this.head;
    }

    let distance = 0;
    let startPointer = this.head;
    let endPointer = this.head;

    while (endPointer) {
      if (distance >= k) {
        startPointer = startPointer.next;
      }

      endPointer = endPointer.next;
      distance++;
    }

    return startPointer;
  }

  public toArray() {
    const array = [];
    let pointer = this.head;

    while (pointer) {
      array.push(pointer.value);
      pointer = pointer.next;
    }

    return array;
  }

  public printAsArray() {
    console.dir(this.toArray(), { depth: null, colors: true });
  }

  public print() {
    console.dir(this, { depth: null, colors: true });
  }
}

const list = new LinkedList();
list.addLast(10);
list.addLast(20);
list.addFirst(5);
list.add(2, 15);
list.add(4, 30);
// list.printAsArray();

// const kth = list.getKthFromTheEnd(3);
// console.log(kth);

// list.reverse();
// list.printAsArray();

// console.log(list.indexOf(15));
// console.log(list.contains(15));

// list.deleteFirst();
// list.deleteLast();
// list.delete(0);
// list.printAsArray();

// list.print();
