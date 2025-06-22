/**
 * Название: Circular Queue Implementation Using Array
 * Условие: Реализовать очередь на основе кольцевого массива с ограниченной вместимостью.
 *         Поддерживаются операции добавления (enqueue), извлечения (dequeue), просмотра (peek),
 *         проверки на пустоту и заполненность, а также вывод содержимого в консоль.
 * Пример:
 *   Ввод: enqueue(10), enqueue(20), enqueue(30), dequeue(), enqueue(40)
 *   Вывод после print(): [40, 20, 30]
 */

type Item = number;

abstract class AbstractArrayQueue {
  abstract enqueue(item: Item): void;
  abstract dequeue(): Item;
  abstract peek(): Item;
  abstract isEmpty(): boolean;
  abstract isFull(): boolean;
  abstract print(): void;
}

class ArrayQueue extends AbstractArrayQueue {
  private begin: number = 0;
  private end: number = 0;
  private size: number = 0;
  private limit: number = 3;
  private queue: Item[] = [];

  enqueue(item: Item): void {
    if (this.isFull()) {
      throw new Error('queue is full');
    }

    this.queue[this.end] = item;
    this.end = (this.end + 1) % this.limit;
    this.size++;
  }
  dequeue(): Item {
    if (this.isEmpty()) {
      throw new Error('queue is empty');
    }

    const firstItem = this.queue[this.begin];
    this.queue[this.begin] = 0;
    this.begin = (this.begin + 1) % this.limit;
    this.size--;

    return firstItem;
  }
  peek(): Item {
    if (this.isEmpty()) {
      throw new Error('queue is empty');
    }

    return this.queue[this.begin];
  }
  isEmpty(): boolean {
    return !Boolean(this.size);
  }
  isFull(): boolean {
    return this.size === this.limit;
  }
  print(): void {
    console.log(this.queue);
  }
}

const queue = new ArrayQueue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.print();

const firstItem = queue.dequeue();
console.log('firstItem', firstItem);
queue.print();

const secondItem = queue.peek();
console.log('secondItem', secondItem);
queue.print();

queue.enqueue(40);
queue.print();
